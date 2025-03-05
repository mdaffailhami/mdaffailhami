'use client';
import { useTheme } from '@/app/theme-provider';
import React from 'react';
import { Tooltip } from 'react-tooltip';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineMemory,
} from 'react-icons/md';
import { toSlug } from '@/utils/to-slug';

function ThemeSwitcherButton(
  props: {
    tooltip: string;
    onClick: () => void;
  } & React.ComponentPropsWithRef<'button'>,
) {
  const id = toSlug(props.tooltip);

  return (
    <>
      <button
        id={id}
        onClick={props.onClick}
        className='hover:bg-on-background/8 active:bg-on-background/15 fixed top-2 right-2 size-min cursor-pointer rounded-full p-3'
      >
        {props.children}
      </button>
      <Tooltip
        anchorSelect={`#${id}`}
        place='bottom-end'
        style={{
          backgroundColor: 'var(--on-background-color)',
          color: 'var(--background-color)',
        }}
      >
        {props.tooltip}
      </Tooltip>
    </>
  );
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  if (theme === 'light') {
    return (
      <ThemeSwitcherButton
        tooltip='Light mode'
        onClick={() => setTheme('dark')}
      >
        <MdOutlineLightMode className='text-on-background text-2xl' />
      </ThemeSwitcherButton>
    );
  }

  if (theme === 'dark') {
    return (
      <ThemeSwitcherButton
        tooltip='Dark mode'
        onClick={() => setTheme('system')}
      >
        <MdOutlineDarkMode className='text-on-background text-2xl' />
      </ThemeSwitcherButton>
    );
  }

  return (
    <ThemeSwitcherButton
      tooltip='System mode'
      onClick={() => setTheme('light')}
    >
      <MdOutlineMemory className='text-on-background text-2xl' />
    </ThemeSwitcherButton>
  );
}
