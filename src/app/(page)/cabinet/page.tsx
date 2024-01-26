import { auth } from "@/auth"

export default async function ContactsPage() {
  const session = await auth();

  return (
    <>
      <div>Cabitet Page</div>
      <div>
        {JSON.stringify(session)}
      </div>
    </>
  )
}