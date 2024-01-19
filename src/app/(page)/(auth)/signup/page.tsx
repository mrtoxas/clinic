import { AuthCardWrapper } from "@/components/main/AuthCardWrapper"
import { SignUpForm } from "@/components/main/forms/signUpForm"

export default function SignUpPage() {
  return (
    <AuthCardWrapper 
      title="СТВОРИТИ АККАУНТ" 
      footerLinkTitle="Вже є аккаунт?" 
      footerLinkHref="/signin"  
      form={<SignUpForm />}
    />       
  )
}