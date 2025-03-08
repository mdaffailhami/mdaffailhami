'use client';
import React from 'react';
import IconButton from '@/components/icon-button';
import Switcher from '@/components/switcher';
import { PlacesType } from 'react-tooltip';
import { Language, useLanguage } from '@/app/language-provider';

export default function LanguageSwitcher() {
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
      className='top-4 right-6 hidden lg:block'
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
