
import * as React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { MdDarkMode,MdOutlineWbSunny } from "react-icons/md";
export interface INavbarProps {
}

export default function Navbar (props: INavbarProps) {
  return (
   <nav className='shadow-sm bg-indigo-500
                    text-xl text-white
                    sticky top-0 left-0 z-50 
                    p-4
                    '>

        <div className='flex justify-between'>
            <div className='App-Name'>
                Weather App 
            </div>

            <div className='flex Settings_control'>
                <div>
                    Location
                </div>
                <div>
                    <ToggleSwitch id = "ThemeToggleSwitch" IconOn={MdDarkMode} IconOff={MdOutlineWbSunny}/>
                </div>
                <div>
                    <ToggleSwitch id="DegreeToggleSwitch" labelOff='°C' labelOn='°F' />
                </div>
            </div>
        </div>     
   </nav>
  );
}
