import Link from 'next/link'

export const Navbar = () => {
	return (
		<nav className="grid gap-4 text-lg font-semibold">
			<Link href="/">Лiкарi</Link>
			<Link href="/">Послуги</Link>
			<Link href="/">Цiни</Link>
			<Link href="/">Контакти</Link>
			<Link href="/">Кошик</Link>
			<Link href="/">Особистий кабiнет</Link>
		</nav>
	)
}