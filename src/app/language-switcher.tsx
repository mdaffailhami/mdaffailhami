'use client';
import React from 'react';
import IconButton from '@/components/icon-button';
import Switcher from '@/components/switcher';
import { PlacesType } from 'react-tooltip';
import { Language, useLanguage } from '@/app/language-provider';
import { useIsMenuOpen } from '@/app/is-menu-open';
import { cn } from '@/utils';

export default function LanguageSwitcher() {
  const { isMenuOpen } = useIsMenuOpen();
  const { language, setLanguage } = useLanguage();

  const languageButtons: {
    name: Language;
    tooltip: string;
    tooltipPlacement: PlacesType;
    label: string;
  }[] = [
    {
      name: 'english',
      tooltip: 'English',
      tooltipPlacement: 'bottom-start',
      label: 'en',
    },
    {
      name: 'indonesian',
      tooltip: 'Indonesian',
      tooltipPlacement: 'bottom-end',
      label: 'id',
    },
  ];

  return (
    <Switcher
      className={cn(
        '-top-full right-6 opacity-0 lg:top-4 lg:opacity-100',
        isMenuOpen && 'top-4 opacity-100',
      )}
      activeIndex={languageButtons.findIndex((x) => x.name === language)}
      options={languageButtons.map((button, i) => (
        <IconButton
          key={i}
          tooltip={button.tooltip}
          tooltipPlacement={button.tooltipPlacement}
          onClick={() => setLanguage(button.name)}
        >
          <span className='text-on-background block w-9 font-semibold'>
            {button.label}
          </span>
        </IconButton>
      ))}
    />
  );
}
