import { Button } from "@/components/shadcn/ui/button"
import { UserIcon } from "@/components/ui/icons"
import Link from "next/link"

export const UserProfileButton = () => {
	return (
		<Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent" aria-label="Профiль користувача" asChild>
	   	<Link href="/cabinet">
			 <UserIcon size={"22"} className="text-primary-foreground" />
			</Link>
	  </Button>
		
	)
}