'use client';
import IconButton from '@/components/icon-button';
import Switcher from '@/components/switcher';
import { Theme, useTheme } from '@/app/theme-provider';
import React from 'react';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineMemory,
} from 'react-icons/md';
import { PlacesType } from 'react-tooltip';
import { useIsMenuOpen } from '@/app/is-menu-open';
import { cn } from '@/utils';

const themeButtons: {
  name: Theme;
  tooltip: string;
  tooltipPlacement: PlacesType;
  icon: React.ReactNode;
}[] = [
  {
    name: 'light',
    tooltip: 'Light mode',
    tooltipPlacement: 'bottom-start',
    icon: <MdOutlineLightMode className='text-on-background text-2xl' />,
  },
  {
    name: 'system',
    tooltip: 'System mode',
    tooltipPlacement: 'bottom',
    icon: <MdOutlineMemory className='text-on-background text-2xl' />,
  },
  {
    name: 'dark',
    tooltip: 'Dark mode',
    tooltipPlacement: 'bottom-end',
    icon: <MdOutlineDarkMode className='text-on-background text-2xl' />,
  },
];

export default function ThemeSwitcher() {
  const { isMenuOpen } = useIsMenuOpen();
  const { theme, setTheme } = useTheme();

  return (
    <Switcher
      className={cn(
        '-top-full left-6 opacity-0 lg:top-4 lg:opacity-100',
        isMenuOpen && 'top-4 opacity-100',
      )}
      activeIndex={themeButtons.findIndex((x) => x.name === theme)}
      options={themeButtons.map((button, i) => (
        <IconButton
          key={i}
          tooltip={button.tooltip}
          tooltipPlacement={button.tooltipPlacement}
          onClick={() => setTheme(button.name)}
        >
          {button.icon}
        </IconButton>
      ))}
    />
  );
}
