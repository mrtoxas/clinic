"use server"

import { SignInUserSchema } from "@/schemas"
import { z } from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const signInAction = async (data: z.infer<typeof SignInUserSchema>) => {
  const validatedFields = SignInUserSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Неправильні облікові дані" }
        default:
          return { error: "Щось пiшло не так. Зверніться до служби підтримки" }
      }
    }

    throw error;
  }


}