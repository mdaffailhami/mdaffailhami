'use client';
import React, { createContext, useContext, useState } from 'react';

type IsMenuOpenContextProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

const IsMenuOpenContext = createContext<IsMenuOpenContextProps | undefined>(
  undefined,
);

export default function IsMenuOpenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <IsMenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </IsMenuOpenContext.Provider>
  );
}

export function useIsMenuOpen() {
  const context = useContext(IsMenuOpenContext);

  if (!context)
    throw new Error('useIsMenuOpen must be used within an IsMenuOpenProvider');

  return context;
}
