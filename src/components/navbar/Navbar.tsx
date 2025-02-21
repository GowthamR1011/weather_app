
import * as React from 'react';
import ToggleSwitch from '../Buttons/ToggleSwitch';
import ThemeButton from '../Buttons/ThemeButton/ThemeButton';
import LocationButton from '../Buttons/LocationButton';
import SearchButton from '../Buttons/SearchButton';
import MetricButton from '../Buttons/MetricButton/MetricButton';


export interface INavbarProps {
}

export default function Navbar (props: INavbarProps) {

  return (
   <nav className='shadow-sm bg-slate-800
                    text-xl text-white
                    sticky top-0 left-0 z-50 
                    p-4
                    '>

        <div className='flex justify-between'>
            <div className='m-3 App-Name'>
                Weather App 
            </div>

            <div className='flex Settings_control m-3'>
                
                <div>
                    <LocationButton />
                </div>
                <div>
                    <SearchButton />
                </div>
                <div>
                    <ThemeButton />
                </div>
                <div>
                    <MetricButton />
                </div>
            </div>
        </div>     
   </nav>
  );
}
