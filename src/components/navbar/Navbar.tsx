
import * as React from 'react';
import ThemeButton from '../Buttons/ThemeButton/ThemeButton';
import LocationButton from '../Buttons/LocationButton';
import SearchButton from '../Buttons/SearchButton';
import MetricButton from '../Buttons/MetricButton/MetricButton';


export interface INavbarProps {
}

export default function Navbar (props: INavbarProps) {

  return (
   <nav >

        <div className='flex justify-between'>


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
