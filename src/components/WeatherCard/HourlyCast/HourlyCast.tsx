import * as React from 'react';
import { IoPartlySunny } from "react-icons/io5";

export interface IHourlyCastProps {
    time:string;
    temperature:string;
    condition:string;

}

export interface IHourlyCastListProps{
    hourlyCastList:IHourlyCastProps[];
}

export function HourlyCast (props:IHourlyCastListProps) {
    const {hourlyCastList} = props;

  return (
    <div className='flex overflow-x-auto'>
    
        { hourlyCastList.length == 0?
        <p>Unable to Load Data</p>:
        hourlyCastList.map(({time,temperature,condition}) => {
            return(
                <div className='mx-3'>
                    <p className='text-sm'>{time}</p>
                    <IoPartlySunny size={22} className=''/>
                    <p className='text-sm'>{temperature}</p>

                </div>
            )
        })}
      
    </div>
  );
}
