"use client"

import Link from 'next/link'
import classNames from 'classnames'

interface PagesLink {
	link: string; 
	title: string;
}

export const HeaderLowerNav = () => {
	const defaultLinkClassName = "font-bold px-3 uppercase text-[0.82rem] text-white h-full";

	const preparedNav = [
    { link: '/doctors', title: 'Лiкарi' },
    { link: '/services', title: 'Послуги' },
    { link: '/prices', title: 'Цiни' },
    { link: '/about', title: 'Про нас' },
    { link: '/contacts', title: 'Контакти' },
  ].map((item, index) => (
    <div key={index} className={defaultLinkClassName}>
      <Link className="h-full flex items-center" href={item.link}>{item.title}</Link>
    </div>
  ));

  return (
    <nav className="flex items-center h-full">{preparedNav}</nav>
  );
}