import { SignInForm } from "@/components/main/forms/signInForm"
import { AuthCardWrapper } from "@/components/main/AuthCardWrapper"

export default function SignInPage() {
  return (
    <AuthCardWrapper 
      title="УВІЙТИ ДО АККАУНТУ" 
      footerLinkTitle="Немає аккаунту?" 
      footerLinkHref="/signup"  
      form={<SignInForm />}
    />    
  )
}