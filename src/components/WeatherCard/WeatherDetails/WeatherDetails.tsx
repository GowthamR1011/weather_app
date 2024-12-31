import * as React from 'react';

export interface IWeatherDetailsProps {
    Precipition?:string;
    WindSpeed?:string;
    Humidity?:string;
    UVIndex?:string;
    AirQuality?:string;
    Pressure?:string;
}

export default function WeatherDetails (props: IWeatherDetailsProps) {
  return (
    <div className='grid grid-cols-2'>
        <div>
            {/* Need to give styling to all the text values.  */}
            <p> Precipitation : {props.Precipition} </p>
            <p> Wind: {props.WindSpeed}</p>
            <p>Humidity: {props.Humidity}</p>
        </div>
        <div className=''>
            <p className='b'>UV Index: {props.UVIndex}</p>
            <p>Air Quality: {props.AirQuality}</p>
            <p>Pressure: {props.Pressure}</p>
        </div>
    </div>
  );
}
