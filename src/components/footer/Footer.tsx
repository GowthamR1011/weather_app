"use client";
import { useAppContext } from '@/contexts';
import * as React from 'react';
import { ThemeClasses } from '@/app/styles';

export interface IFooterProps {
}

export default function  Footer (props: IFooterProps) {
  const {darkTheme} = useAppContext();
    const currentTheme = darkTheme? ThemeClasses['dark'].footer:ThemeClasses['light'].footer;
  
  return (
    <footer className={` footer text-xl text-center 
             fixed inset-x-0 bottom-0 
             p-2
             ${currentTheme}`
             }>
      Footer
    </footer>
  );
}
