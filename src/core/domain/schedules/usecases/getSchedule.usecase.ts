import {ScheduleRepositoryInterface} from "@/core/domain/schedules/interfaces/schedule-repository.interface";
import {Schedule} from "@/core/domain/schedules/entities/schedule.entity";

export class GetScheduleUseCase {
  constructor(private readonly scheduleRepository: ScheduleRepositoryInterface) {
  }

  async execute(studentID: number): Promise<Schedule[]> {
    return this.scheduleRepository.getScheduleByStudentID(studentID);
  }
}
