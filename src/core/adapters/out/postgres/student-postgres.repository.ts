import { StudentRepositoryInterface } from "@/core/domain/students/interfaces/student-repository.interface";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { Student } from "@/core/domain/students/entities/student.entity";
import { students } from "@/core/adapters/out/postgres/schema";
import { eq } from "drizzle-orm";
import * as schema from "@/core/adapters/out/postgres/schema";

export class StudentPostgresRepository implements StudentRepositoryInterface {
  constructor(private readonly connection: PostgresJsDatabase<typeof schema>) {}

  async findByUsername(username: string): Promise<Student> {
    const [student] = await this.connection
      .select()
      .from(students)
      .where(eq(students.username, username))
      .limit(1);

    return student;
  }

  async update(studentID: number, student: Student): Promise<Student> {
    return this.connection
      .update(students)
      .set(student)
      .where(eq(students.id, studentID))
      .returning() as unknown as Student;
  }
}
