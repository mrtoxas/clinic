import { signOut } from "@/auth"
import { Button } from "@/components/shadcn/ui/button"
import { LogOutIcon } from "@/components/ui/icons"

export const LogoutButton = async () => {
	return (
		<form action={async () => {
			"use server";

			await signOut({
				redirectTo: "/"
			})
		}}>
			<Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent" aria-label="Search button">
				<LogOutIcon size={"22"} className="text-primary-foreground" />
			</Button>
		</form>

	)
}