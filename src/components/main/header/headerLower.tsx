import { Container } from "@/components/ui/container"
import { ShoppingCartButton } from "@/components/main/shoppingCartButton"
import { UserProfileButton } from "@/components/main/userProfileButton"
import { SearchButton } from "@/components/main/searchButton"
import { MainMenuButton } from "@/components/main/mainMenuButton"
import { NavDesktop } from "@/components/main/nav/navDesktop"
import { ModeToggle } from "@/components/ui/modeToggle"
import { HeaderLowerNav } from "@/components/main/header/headerLowerNav"

export const HeaderLower = () => {
  return (
    <div className="bg-primary h-14">
      <Container className="flex justify-between items-center h-full">
        <div className="md:hidden">
          <MainMenuButton />
        </div>
        <div className="hidden md:block h-full">
          <HeaderLowerNav />
        </div>
        <div className="flex gap-2">
          <ShoppingCartButton />
          <UserProfileButton />
          <SearchButton />
        </div>
      </Container>
    </div>
  )
}