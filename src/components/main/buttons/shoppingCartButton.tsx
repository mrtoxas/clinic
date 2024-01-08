import { Button } from "@/components/shadcn/ui/button"
import { ShoppingCartIcon } from "@/components/ui/icons"

export const ShoppingCartButton = () => {
	return (
		<Button variant="ghost" size="icon" className="relative bg-transparent hover:bg-transparent" aria-label="Shoping cart button">
	   	<ShoppingCartIcon size={"22"} className="text-primary-foreground" />
	    <span 
	     	className="bg-primary-dark text-primary-foreground px-1 leading-[1rem] rounded-full text-[0.7rem] absolute right-[-6px] top-[-3px]" 
	     	aria-label="Shoping cart count">10</span>
	  </Button>
		
	)
}