import {Schedule} from "@/core/domain/schedules/entities/schedule.entity";

export interface ScheduleRepositoryInterface {
    getScheduleByStudentID(studentID: number): Promise<Schedule[]>;
}
