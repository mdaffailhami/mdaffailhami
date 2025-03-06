'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Link = {
  name: string;
  path: string;
};

const links: Link[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },

  {
    name: 'Portfolio',
    path: '/portfolio',
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
  const [update, forceUpdate] = React.useState(0); // Dummy state to trigger re-renders

  const navbarRef = React.useRef<HTMLElement | null>(null);
  const activeNavLinkRef = React.useRef<HTMLAnchorElement | null>(null);
  const activeIndicatorNavLinkRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    activeIndicatorNavLinkRef.current!.style.width =
      activeNavLinkRef.current!.offsetWidth + 'px';
    activeIndicatorNavLinkRef.current!.style.height =
      activeNavLinkRef.current!.offsetHeight + 'px';

    const navbarPaddingLeft = parseFloat(
      window.getComputedStyle(navbarRef.current!).paddingLeft,
    );

    activeIndicatorNavLinkRef.current!.style.transform = `translateX(${
      activeNavLinkRef.current!.offsetLeft - navbarPaddingLeft
    }px)`;
  }, [update, pathname]);

  React.useEffect(() => {
    const observer = new ResizeObserver(() => forceUpdate((n) => n + 1));
    observer.observe(navbarRef.current!);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navbarRef}
      className='bg-surface border-on-background fixed top-2.5 left-1/2 -translate-x-1/2 rounded-full border px-2.5 py-3.5'
    >
      <ul className='space-x-2'>
        {links.map((link, i) => (
          <li key={i} className='inline'>
            <NavLink
              ref={link.path == pathname ? activeNavLinkRef : null}
              isActive={link.path === pathname}
              link={link}
            />
          </li>
        ))}
      </ul>
      <div
        ref={activeIndicatorNavLinkRef}
        className={`outline-primary absolute top-2.5 rounded-full outline-2 transition duration-200 ease-linear`}
      />
    </nav>
  );
}

function NavLink(
  props: { isActive: boolean; link: Link } & React.ComponentPropsWithRef<'a'>,
) {
  return (
    <Link
      ref={props.ref}
      href={props.link.path}
      onClick={props.onClick}
      className={`hover:bg-primary/15 rounded-full px-3 py-1.5 font-medium ${
        props.isActive ? 'text-on-surface' : 'text-on-surface/85'
      }`}
    >
      {props.link.name}
    </Link>
  );
}
// function NavLink(props: { isActive: boolean; link: Link }) {
//   return (
//     <Link
//       href={props.link.path}
//       className={`hover:bg-primary/15 inline-block rounded-full px-3 py-1.5 font-medium transition ${props.isActive ? 'outline-primary text-on-surface outline-2' : 'text-on-surface/85'}`}
//     >
//       {props.link.name}
//     </Link>
//   );
// }
