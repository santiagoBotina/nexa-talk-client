import { StudentPostgresRepository } from "@/core/adapters/out/postgres/student-postgres.repository";
import { db } from "@/core/adapters/out/postgres/db.connection";
import {SchedulePostgresRepository} from "@/core/adapters/out/postgres/schedule-postgres.repository";

export const studentRepository = new StudentPostgresRepository(db);
export const scheduleRepository = new SchedulePostgresRepository(db);
