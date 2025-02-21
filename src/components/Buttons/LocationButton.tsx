"use client"
import * as React from 'react';
import { MdMyLocation } from "react-icons/md";
interface ILocationButtonProps {
}
interface ILocation{
  latitude:number;
  longitude:number;
}
const LocationButton: React.FunctionComponent<ILocationButtonProps> = (props) => {
  
  const [location,setLocation] = React.useState<ILocation>();
  function getLocation(){
    if('geolocation' in navigator)
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
        console.log(latitude);
    })
  }

  React.useEffect(getLocation,[])
  
  return(
    <div className="mx-2 cursor-pointer">
        <MdMyLocation onClick={getLocation}/>
    </div>
  );
};

export default LocationButton;
