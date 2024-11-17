'use client';
import {ScheduleXCalendar, useCalendarApp} from "@schedule-x/react";
import {createViewWeek} from "@schedule-x/calendar";
import {getStartOfWeek} from "@/app/utils/getStartOfWeek";
import '@schedule-x/theme-default/dist/calendar.css';

export type Event = {
    id: number,
    start: string,
    end: string,
    title: string,
    description: string
}

export default function Index({events}: {events: Event[]}) {
  const calendar = useCalendarApp({
    views: [createViewWeek()],
    events: events,
    selectedDate: getStartOfWeek(),
    isDark: true,
    dayBoundaries: {
      start: '18:00',
      end: '22:00',
    },
    locale: 'es-ES',
    weekOptions: {
      nDays: 5,
      eventWidth: 95,
      gridHeight: 400,
    }
  });

  return (
    <div className="h-[90%] w-[100%] overflow-auto">
      <ScheduleXCalendar calendarApp={calendar}/>
    </div>
  );
}
