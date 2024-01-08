import { Button } from "@/components/shadcn/ui/button"
import { SearchIcon } from "@/components/ui/icons"

export const SearchButton = () => {
	return (
		<Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent" aria-label="Search button">
      <SearchIcon size={"22"} className="text-primary-foreground" />
    </Button>
	)
}