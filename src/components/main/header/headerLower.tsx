import { MainMenuButton } from "@/components/main/mainMenuButton"
import { HeaderLowerNav } from "@/components/main/header/headerLowerNav"
import { HeaderLowerActions } from "@/components/main/header/headerLowerActions"

export const HeaderLower = () => {
  return (
    <div className="bg-primary h-14">
      <div className="container flex justify-between items-center h-full">
        <div className="md:hidden">
          <MainMenuButton />
        </div>
        <div className="hidden md:block h-full">
          <HeaderLowerNav />
        </div>
        <HeaderLowerActions />
      </div>
    </div>
  )
}