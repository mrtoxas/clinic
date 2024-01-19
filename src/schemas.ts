import { z } from "zod";


export const SignInUserSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Поле обов'язкове" })
      .email("Невірний формат пошти"),

    password: z
      .string()
      .min(1, { message: "Поле обов'язкове" })
  });

  
export const SignUpUserSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Поле обов'язкове" })
      .email("Невірний формат пошти"),

    password: z
      .string()
      .min(1, { message: "Поле обов'язкове" })
      .min(8, { message: "Має містити щонайменше 8 символів" })
  })