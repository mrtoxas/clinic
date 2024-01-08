import { ShoppingCartButton } from "@/components/main/buttons/shoppingCartButton"
import { UserProfileButton } from "@/components/main/buttons/userProfileButton"
import { SearchButton } from "@/components/main/buttons/searchButton"

export const HeaderLowerActions = () => {
  const ActionItem = ({ children }: { children: JSX.Element }) => {
    return (
      <div className="h-full flex items-center relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:scale-x-0 before:transition-all before:duration-300 hover:text-primary-dark hover:before:scale-x-100">
        {children}
      </div>
    )
  }

  return (
    <div className="flex gap-2 h-full items-center">
      <ActionItem>
        <ShoppingCartButton />
      </ActionItem>
      <ActionItem>
        <UserProfileButton />
      </ActionItem>
      <ActionItem>
        <SearchButton />
      </ActionItem>
    </div>
  )
}