'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Link = {
  name: string;
  icon?: React.ReactNode;
  path: string;
};

const links: Link[] = [
  {
    name: 'Home',
    // icon: <IoHomeOutline className='inline' />,
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },

  {
    name: 'Portfolios',
    path: '/portfolios',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'FAQ',
    path: '/faq',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export default function Navbar() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <nav className='bg-surface border-on-background fixed top-2.5 left-1/2 -translate-x-1/2 space-x-2 rounded-full border px-2.5 py-3.5'>
      {links.map((link, i) => (
        <NavLink key={i + 1} isActive={link.path === pathname} link={link} />
      ))}
    </nav>
  );
}

function NavLink(props: { isActive: boolean; link: Link }) {
  return (
    <Link
      href={props.link.path}
      className={`hover:bg-primary/15 rounded-full px-3 py-1.5 font-medium ${props.isActive ? 'outline-primary text-on-surface outline-2' : 'text-on-surface/85'}`}
    >
      {props.link.icon}
      {props.link.name}
    </Link>
  );
}
