import { Button } from "@/components/shadcn/ui/button"
import { MenuIcon } from "@/components/ui/icons"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet"
import { Navbar } from "@/components/main/navMobile"

export const MainMenuButton = () => {
	return (
		<Sheet>
		  <SheetTrigger asChild>
		  	<Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent" aria-label="Menu button">
		      <MenuIcon size={"22"} className="text-primary-foreground" />
		    </Button>
		  </SheetTrigger>
		  <SheetContent side="left">
		    <SheetHeader>
		      <SheetTitle><strong>Apex Clinic</strong></SheetTitle>
		      <SheetDescription>
		        <div className="mt-4">
		        	<Navbar />
		        </div>
		      </SheetDescription>
		    </SheetHeader>
		  </SheetContent>
		</Sheet>
	)
}