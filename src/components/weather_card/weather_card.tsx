import * as React from 'react';
import { CloudSun } from 'lucide-react';

export interface IWeatherCardProps {
}

export default function WeatherCard (props: IWeatherCardProps) {
  return (
    <div className='m-3 p-4
                    border-r-2 border-b-2 
                    rounded
                    shadow-sm'     >
        <div className='w-100'>
            Location Name
        </div>
        <div className='columns-2 w-100'>
                <div>
                    
                    <CloudSun color="#e2d11d" size={64}/>
                    
                    Current Temperature
                 </div>
                <div>
                    Weather Details
                </div>
        </div>
        <hr />
        <div className='w-100'>
            Hourly Weather Cast
        </div>
        
      
    </div>
  );
}
