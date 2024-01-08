"use client"

import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation';

const defaultLinkClassName = "relative h-full px-4 text-white before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:scale-x-0 before:transition-all before:duration-300 hover:text-primary-dark hover:before:scale-x-100";
const activeLinkClassName = "before:scale-x-100";

export const HeaderLowerNav = () => {
  const pathname = usePathname();

  const preparedNav = [
    { link: '/doctors', title: 'Лiкарi' },
    { link: '/services', title: 'Послуги' },
    { link: '/prices', title: 'Цiни' },
    { link: '/about', title: 'Про нас' },
    { link: '/contacts', title: 'Контакти' },
  ].map((item, index) => {

    const activeLink = pathname === item.link;

    const itemClassName = activeLink ? classNames(activeLinkClassName, defaultLinkClassName) : defaultLinkClassName

    return (
      <div key={index} className={itemClassName}>
        <Link className="h-full flex items-center font-bold text-sm uppercase" href={item.link}>{item.title}</Link>
      </div>
    )
  });

  return (
    <nav className="flex items-center h-full">{preparedNav}</nav>
  );
}