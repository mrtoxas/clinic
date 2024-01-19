import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/ui/alert";

type MsgType = "error" | "success";

interface FormMessageProps {
  type?: MsgType;
  message: string;
}

export const FormAlert = ({ type, message }: FormMessageProps) => {
  if (!message) return;

  switch (type) {
    case "error":
      return (
        <Alert variant="destructive">          
          <AlertTitle>Помилка!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )

    default:
      return (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )
  }
}