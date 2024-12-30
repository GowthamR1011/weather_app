import * as React from 'react';
import { MdMyLocation } from "react-icons/md";
interface ILocationButtonProps {
}

const LocationButton: React.FunctionComponent<ILocationButtonProps> = (props) => {
  return(
    <div className="mx-2 cursor-pointer">
        <MdMyLocation />
    </div>
  );
};

export default LocationButton;
