"use server";

import { LoginSchema } from "@/app/_lib/validations";
import { LoginUsecase } from "@/core/domain/students/usecases/login.usecase";
import { studentRepository } from "@/app/server";

type LoginState = {
  username: string;
  password: string;
};

export async function login(state: LoginState, formData: FormData) {
  const validationResult = LoginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { username, password } = validationResult.data;

  await new LoginUsecase(studentRepository).execute(username, password);
}
