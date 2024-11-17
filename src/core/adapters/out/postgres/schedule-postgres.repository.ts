import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import {asignatures, schedules, teachers, students} from "@/core/adapters/out/postgres/schema";
import {and, eq} from "drizzle-orm";
import * as schema from "@/core/adapters/out/postgres/schema";
import {ScheduleRepositoryInterface} from "@/core/domain/schedules/interfaces/schedule-repository.interface";
import {Schedule} from "@/core/domain/schedules/entities/schedule.entity";

export class SchedulePostgresRepository implements ScheduleRepositoryInterface {
  constructor(private readonly connection: PostgresJsDatabase<typeof schema>) {}

  async getScheduleByStudentID(studentID: number): Promise<Schedule[]> {
    const schedule = await this.connection
      .select({
        id: schedules.id,
        weekDay: schedules.week_day,
        startHour: schedules.start_hour,
        endHour: schedules.end_hour,
        semester: schedules.semester,
        createdAt: schedules.created_at,
        updatedAt: schedules.updated_at,
        teacher: teachers.name,
        asignature: asignatures.name,
      })
      .from(schedules)
      .innerJoin(students, eq(students.id, schedules.student_id))
      .innerJoin(teachers, eq(teachers.id, schedules.teacher_id))
      .innerJoin(asignatures, eq(asignatures.id, schedules.asignature_id))
      .where(
        and(eq(schedules.student_id, studentID),
          eq(schedules.semester, students.semester))
      );

    return schedule as unknown as Schedule[];
  }
}
