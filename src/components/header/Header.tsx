"use client";

import * as React from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useAppContext } from '@/contexts';
import { ThemeClasses } from '@/app/styles';

export interface IHeaderProps {
}



export default function Header (props: IHeaderProps) {
  const {darkTheme} = useAppContext();
  const currentTheme = darkTheme? ThemeClasses['dark'].header:ThemeClasses['light'].header;

  return (
    <div className={`header flex justify-between shadow-sm 
                    text-xl
                    sticky top-0 left-0 z-50 
                    p-4
                    ${currentTheme}`}>
      
      <div className='m-3 App-Name'>
                Weather App 
            </div>
      
      <Navbar />
    </div>
  );
}
