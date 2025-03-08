'use client';
import { cn } from '@/utils';
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
    name: 'Experiences',
    path: '/experiences',
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
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
}

function MobileNavbar() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <HamburgerMenu isActive={isActive} onClick={() => setIsActive(!isActive)} />
  );
}

function HamburgerMenu({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'hover:bg-outline fixed top-2.5 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col gap-y-[8px] rounded-full border-2 p-[14px] lg:hidden',
        {
          'border-outline': !isActive,
          'border-on-surface': isActive,
        },
      )}
    >
      <span
        className={cn(
          'border-on-surface w-[32px] rounded-full border',
          isActive && 'opacity-0',
        )}
      />
      {(() => {
        return (
          <div className='relative bg-red-500'>
            {[0, 1].map((i) => (
              <span
                key={i}
                className={cn(
                  'border-on-surface absolute -top-[1px] left-0 w-[32px] rounded-full border transition',
                  {
                    'border-2': isActive,
                    'rotate-45': isActive && i === 0,
                    '-rotate-45': isActive && i === 1,
                  },
                )}
              />
            ))}
          </div>
        );
      })()}
      <span
        className={cn(
          'border-on-surface w-[32px] rounded-full border',
          isActive && 'opacity-0',
        )}
      />
    </button>
  );
}

function DesktopNavbar() {
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
      className='bg-surface border-on-background fixed top-2.5 left-1/2 hidden -translate-x-1/2 rounded-full border px-2.5 py-3.5 lg:block'
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
