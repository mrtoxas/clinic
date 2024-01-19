"use server"

import { SignUpUserSchema } from "@/schemas"
import { z } from "zod";
import bcrypt from "bcryptjs";
import db from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const signUpAction = async (data: z.infer<typeof SignUpUserSchema>) => {
  const validatedFields = SignUpUserSchema.safeParse(data);

  if (!validatedFields.success) return ({ error: "Перевірте введені дані та спробуйте ще раз" })

  const {email, password } = validatedFields.data;
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if(existingUser) return ({ error: "Такий аккаунт вже існує" })

  await db.user.create({        
    data: {
      email,
      password: hashedPassword
    }
  })

  return ({ sucess: "Yeah!" })
}