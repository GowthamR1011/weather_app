import * as React from 'react';
import { IoPartlySunny } from "react-icons/io5";

export interface IWeatherCardProps {
    location:string;
}

export default function WeatherCard (props: IWeatherCardProps) {
  return (
    <div className='m-3 p-4
                    border-r-2 border-b-2 
                    rounded
                    shadow-sm bg-neutral-200'     >
        <div className='w-100'>
            {props.location}
        </div>
        <div className='grid grid-cols-3 w-100 overflow-hidden'>
                <div>
                    <IoPartlySunny size={32} className='ml-2'/>

                    
                    Current Temperature
                 </div>
                <div className='grid grid-cols-subgrid col-span-2'>
                    Weather Details
                </div>
        </div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
        <div className='w-100'>
            Hourly Weather Cast
        </div>
        
      
    </div>
  );
}
