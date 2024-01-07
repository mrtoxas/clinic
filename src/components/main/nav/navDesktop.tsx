"use client"
import Link from 'next/link'
import classNames from 'classnames'

const defaultLinkClassName = "font-bold px-3 uppercase text-[0.82rem] text-white"

export const NavDesktop = () => {
	
	const NavItem = ({href, title}: {href: string, title: string}) => { 
		const linkClassName = pathname === href 
			? classNames(activeLinkClassName, defaultLinkClassName) 
			: defaultLinkClassName;

		return <Link className={linkClassName} href={href}>{title}</Link>
	}

	return (
		<nav className="flex">
			<NavItem href="/" title="Лiкарi" />
			<NavItem href="/services" title="Послуги" />
			<NavItem href="/prices" title="Цiни" />
			<NavItem href="/about" title="Про нас" />
			<NavItem href="/contacts" title="Контакти" />
		</nav>
	)
}