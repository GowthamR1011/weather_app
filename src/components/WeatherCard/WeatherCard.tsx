import * as React from 'react';
import WeatherDetails,{ IWeatherDetailsProps } from './WeatherDetails/WeatherDetails';
import { IoPartlySunny } from "react-icons/io5";

export interface IWeatherCardProps {
    location:string;
}

// Get API Values 
// Then pass to weather details
const weatherDetailsProps: IWeatherDetailsProps = {};
weatherDetailsProps.Precipition = "12";
weatherDetailsProps.AirQuality="77";
weatherDetailsProps.Humidity="63%";
weatherDetailsProps.Pressure="21 inHg";
weatherDetailsProps.UVIndex="1";
weatherDetailsProps.WindSpeed="22 mph";


export default function WeatherCard (props: IWeatherCardProps) {
  return (
    <div className='m-3 p-4
                    border-r-2 border-b-2 
                    rounded
                    shadow-sm bg-neutral-200'     >
        <div className='w-100 my-2'>
            {props.location}
        </div>
        <div className='grid grid-cols-3 w-100 overflow-hidden'>
                <div>
                    <IoPartlySunny size={56} className='ml-2'/>

                    <div className='mt-2'>
                        <p className='text-l'>23 °C</p> {/* Need to center this print value with tailwind class*/}
                        <p className='text-sm'>Feels Like: 21 °C</p>

                    </div>
                 </div>
                <div className=' col-span-2'>
                  <WeatherDetails {...weatherDetailsProps}/>
                </div>
        </div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
        <div className='w-100'>
            Hourly Weather Cast
        </div>
        
      
    </div>
  );
}
