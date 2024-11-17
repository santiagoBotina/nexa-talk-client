'use server';
import ClientSchedule from './index';
import {getStudentSchedule} from "@/app/horario/actions";
import {generateEventsForSchedules, generateTeacherSchedule} from "@/app/utils/events.utils";
import TeacherScheduleSideBar from "@/app/components/schedules/TeacherSchedules";
import {H1} from "@/app/components/Title";

export default async function ScheduleTable({ studentId }: { studentId: number }) {
  const schedules = await getStudentSchedule(studentId);
  const events = generateEventsForSchedules(schedules);
  const teacherSchedule = generateTeacherSchedule(schedules);

  return (
    <div className="flex space-x-5 justify-center p-12 max-h-dvh">
      <ClientSchedule events={events} />
      <div>
        <H1 title='Horario profesoral' className="bg-gradient-to-l from-purple-900 to-purple-600 text-white rounded p-5 text-center mb-2 font-bold" />
        <TeacherScheduleSideBar schedules={teacherSchedule} />
      </div>
    </div>
  );
}
