"use server";

import { z } from "zod";

const schema = z.object({
    fullName: z.string({ message: "Required"}),
    email: z.string({
        invalid_type_error: 'Invalid Email',
      }).email(),
    phone: z.string().length(11).transform(data => Number(data)),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match"
      });
    }
  });

  export default async function createUser(formData: FormData) {
    const  validatedFields = schema.safeParse({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    })

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
  }