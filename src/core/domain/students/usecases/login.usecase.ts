import { StudentRepositoryInterface } from "@/core/domain/students/interfaces/student-repository.interface";
import { createSession } from "@/app/_lib/sessions";
import {Student} from "@/core/domain/students/entities/student.entity";

export class LoginUsecase {
  constructor(private readonly studentRepository: StudentRepositoryInterface) {}

  async execute(username: string, password: string): Promise<Student> {
    console.debug("LoginUsecase.execute", username, password);

    const student = await this.studentRepository.findByUsername(username);

    if (!student) {
      throw new Error("Student not found");
    }

    await createSession({
      userID: student.id,
      username: student.username,
      email: student.email,
    });

    return student;
  }
}
