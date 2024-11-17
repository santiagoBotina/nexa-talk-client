import {Schedule} from "@/core/domain/schedules/entities/schedule.entity";
import {Event} from "@/app/components/schedules";

const getWeekDayNumber = (weekDay: string): number => {
  const daysMap: { [key: string]: number } = {
    'Lunes': 1,
    'Martes': 2,
    'Miercoles': 3,
    'Jueves': 4,
    'Viernes': 5,
  };
  return daysMap[weekDay];
};

const generateEventsForNextTwoMonths = (schedule: Schedule, eventID: number): Event[] => {
  const events: Event[] = [];
  const today = new Date();
  const weekDayNumber = getWeekDayNumber(schedule.weekDay);

  const current = new Date(today);

  // Find the next occurrence of the specified weekday
  while (current.getDay() !== weekDayNumber) {
    current.setDate(current.getDate() + 1);
  }

  // Calculate end date (two months from today)
  const endDate = new Date();
  endDate.setMonth(today.getMonth() + 2);

  // Generate events for every occurrence of that weekday until endDate
  while (current <= endDate) {
    const start = `${current.toISOString().split('T')[0]} ${schedule.startHour}`.slice(0, -3);
    const end = `${current.toISOString().split('T')[0]} ${schedule.endHour}`.slice(0, -3);

    events.push({
      id: eventID,
      title: schedule.asignature,
      description: schedule.teacher,
      start,
      end,
    });

    // Move to the next week
    current.setDate(current.getDate() + 7);
    eventID++;
  }

  return events;
};

export const generateEventsForSchedules = (schedules: Schedule[]): Event[] => {
  const allEvents: Event[] = [];
  let eventID = 1;

  for (const schedule of schedules) {
    const events = generateEventsForNextTwoMonths(schedule, eventID);
    allEvents.push(...events);
    eventID++;
  }

  return allEvents;
};

export type TeacherSchedule = {
    asignature: string;
    days: {
        weekDay: string;
        startHour: string;
        endHour: string;
    }[],
};

export type TeacherScheduleMap = {
    [key: string]: TeacherSchedule[];
};

export const generateTeacherSchedule = (schedules: Schedule[]): TeacherScheduleMap => {
  const teacherSchedule: TeacherScheduleMap = {};

  for(const schedule of schedules) {
    if(!teacherSchedule[schedule.teacher]) {
      teacherSchedule[schedule.teacher] = [];
    }

    teacherSchedule[schedule.teacher].push({
      asignature: schedule.asignature,
      days: [{
        weekDay: schedule.weekDay,
        startHour: schedule.startHour,
        endHour: schedule.endHour,
      }],
    });
  }

  return teacherSchedule;
}
