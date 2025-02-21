"use client";

import * as React from 'react';
import ToggleSwitch from '../ToggleSwitch';
import { MdDarkMode,MdOutlineWbSunny } from "react-icons/md";
import { useAppContext } from '@/contexts';


export interface IThemeButtonProps {
}

export default function ThemeButton (props: IThemeButtonProps) {
    const {changeTheme} = useAppContext();

  return (
    <div>
      <ToggleSwitch id = "ThemeToggleSwitch" IconOn={MdDarkMode} IconOff={MdOutlineWbSunny} changeFunction={changeTheme} />
    </div>
  );
}
