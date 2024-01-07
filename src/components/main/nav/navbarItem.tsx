import Link from 'next/link'
import classNames from 'classnames'

const defaultClassName = "h-14 flex items-center justify-center relative";

const beforeClassName = "before:absolute before:content-[''] before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:scale-x-0 before:transition-all before:duration-300";

const hoverClassName = "hover:before:scale-x-100 hover:text-primary-dark"

export const NavbarItem = ({className, children}: {className?: string, children: React.children}) => {

	const itemClassName = classNames(defaultClassName, beforeClassName, hoverClassName, className);

	return (
		<div className="itemClassName">{children}</div>
	)
}