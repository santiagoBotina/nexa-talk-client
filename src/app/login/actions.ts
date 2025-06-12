"use server";

import { LoginSchema } from "@/app/_lib/validations";
import { authAgentUseCase } from "@/core/domain/auth/usecases/auth-agent.usecase";

export type LoginState = {
  errors?: {
    legalID?: string[];
    password?: string[];
  };
  success?: boolean;
};

export async function login(_state: LoginState, formData: FormData) {
  const validationResult = LoginSchema.safeParse({
    legalID: formData.get("legalID"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  await authAgentUseCase.execute(validationResult.data);

  return {
    success: true,
  };
}
