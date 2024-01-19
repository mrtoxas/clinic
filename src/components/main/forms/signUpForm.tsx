"use client"

import { Button } from "@/components/shadcn/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn/ui/form"
import { Input } from "@/components/shadcn/ui/input"
import { EyeIcon, EyeOffIcon, Loader2Icon } from "@/components/ui/icons"
import { SignUpUserSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { FormAlert } from "../formAlert"
import { signUpAction } from "@/actions/signUpAction"



export const SignUpForm = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [formErrorMsg, setFormErrorMsg] = useState<string | undefined>("");

  const toggleIsPassVisible = () => setIsPassVisible(prevState => !prevState);

  const form = useForm<z.infer<typeof SignUpUserSchema>>({
    resolver: zodResolver(SignUpUserSchema)
  })

  function onSubmit(data: z.infer<typeof SignUpUserSchema>) {
    setFormErrorMsg("");

    startTransition(() => {
      signUpAction(data).then(res => {
        setFormErrorMsg(res?.error);
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 mt-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Електронна пошта</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Введіть пошту"
                    required
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="passwordField">Пароль</FormLabel>
                <FormControl>
                  <div className="flex relative">
                    <Input
                      placeholder="Введіть пароль"
                      className="w-full pr-10"
                      type={isPassVisible ? 'text' : 'password'}
                      required
                      id="passwordField"
                      disabled={isPending}
                      {...field}
                    />
                    <Button
                      type="button"
                      onClick={toggleIsPassVisible}
                      variant="ghost"
                      size="icon"
                      title="Показати змінні теми"
                      className="absolute right-0 top-0"
                      disabled={isPending}
                    >
                      {isPassVisible
                        ? <EyeIcon className="h-4 w-4 text-primary" />
                        : <EyeOffIcon className="h-4 w-4 text-primary" />}
                    </Button>
                  </div>
                </FormControl>
                <FormDescription>Мінімум 8 симолів</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {formErrorMsg && <FormAlert type="error" message={formErrorMsg} />}
        </div>

        <Button type="submit" className="w-full mt-6">
          {isPending && <Loader2Icon className="h-4 w-4 mr-1.5 animate-spin" />}Зареєструватись
        </Button>
      </form>
    </Form>
  )
}