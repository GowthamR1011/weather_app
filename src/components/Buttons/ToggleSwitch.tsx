"use client";
import * as React from 'react';

interface IToggleSwitchProps {
    id:string;
    labelOn?:string;
    labelOff?:string;
    IconOn?:React.ComponentType<{className?:string; }>;

    IconOff?:React.ComponentType<{className?:string; }>;
    changeFunction:Function;
}

const ToggleSwitch: React.FunctionComponent<IToggleSwitchProps> = (props) => {


  return(
    <div className="mx-3 flex items-center gap-2">
    
    { props.IconOff && 
        <label htmlFor={props.id}>
            <props.IconOff className='cursor-pointer' />
        </label>
    }
    
    { props.labelOff && 
        <label htmlFor={props.id} className="text-white text-sm cursor-pointer">
            {props.labelOff}
        </label> 
    }
   
    <div className="relative w-11 h-5">
      <input 
            id={props.id} 
            type="checkbox" 
            onClick={()=>{props.changeFunction()}}
            className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" 
            />
      <label htmlFor={props.id} className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
      </label>
    </div>
    
    { props.IconOn &&
        <label htmlFor={props.id} >
            <props.IconOn className='cursor-pointer'/>
        </label>
    }

    { props.labelOn && 
        <label htmlFor={props.id} className="text-white text-sm cursor-pointer">
            {props.labelOn}
        </label>
    }
  </div>
  );
};

export default ToggleSwitch;
