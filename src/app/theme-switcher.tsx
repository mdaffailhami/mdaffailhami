'use client';
import IconButton from '@/components/icon-button';
import { Switcher } from '@/components/switcher';
import { Theme, useTheme } from '@/app/theme-provider';
import React from 'react';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineMemory,
} from 'react-icons/md';
import { PlacesType } from 'react-tooltip';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

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

  return (
    <Switcher
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
