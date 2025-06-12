import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    return { message: "Este campo es requerido." };
  }

  if (issue.code == z.ZodIssueCode.too_small) {
    return {
      message: `Este valor debe ser de mínimo ${issue.minimum} digitos.`,
    };
  }

  if (issue.code == z.ZodIssueCode.too_big) {
    return {
      message: `Este valor debe ser de máximo ${issue.maximum} digitos.`,
    };
  }

  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);

export const LoginSchema = z.object({
  legalID: z.string().min(5),
  password: z.string().min(8),
});
