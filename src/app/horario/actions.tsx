"use server";

import {GetScheduleUseCase} from "@/core/domain/schedules/usecases";
import {scheduleRepository} from "@/app/server";
import {Schedule} from "@/core/domain/schedules/entities/schedule.entity";

export async function getStudentSchedule(studentID: number): Promise<Schedule[]> {
  return new GetScheduleUseCase(scheduleRepository).execute(studentID);
}
