import {TeacherScheduleMap} from "@/app/utils/events.utils";
import React from "react";

export default function TeacherScheduleSideBar({ schedules }: { schedules: TeacherScheduleMap }) {
  const teachers = Object.keys(schedules);

  return (
    <div className="relative shadow-md sm:rounded-lg overflow-y-scroll overflow-x-hidden h-[70%] w-[100%]">
      <table className="w-full text-sm text-left rtl:text-right text-white bg-black">
        <thead className="text-xs text-gray-700 uppercase bg-black dark:bg-black dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
                        Profesor
            </th>
            <th scope="col" className="px-6 py-3">
                        Hora
            </th>
            <th scope="col" className="px-6 py-3">
                        Materia
            </th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => {
            return (
              <React.Fragment key={teacher}>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-bold"
                  >
                    {teacher}
                  </th>

                  {schedules[teacher].map((schedule, index) => (
                    <td key={`schedule-header-${teacher}-${index}`} className="px-6 py-4"></td>
                  ))}
                </tr>

                {schedules[teacher].map((schedule, index) => (
                  <tr key={`schedule-row-${teacher}-${index}`} className="bg-white border-b dark:bg-black dark:border-gray-700">
                    <td key={`teacher-name-${teacher}-${index}`} className="px-6 py-4">
                    </td>

                    {schedule.days.map((day, dayIndex) => (
                      <td key={`day-${teacher}-${index}-${dayIndex}`} className="px-6 py-4">
                        {day.weekDay} {day.startHour} - {day.endHour}
                      </td>
                    ))}

                    <td key={`asignature-${teacher}-${index}`} className="px-6 py-4">
                      {schedule.asignature}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function generateRandomKey() {
  return `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
}
