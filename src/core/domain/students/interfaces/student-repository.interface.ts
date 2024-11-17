import { Student } from "@/core/domain/entities/student.entity";

export interface StudentRepositoryInterface {
  findByUsername(username: string): Promise<Student>;
  update(studentID: number, student: Student): Promise<Student>;
}
