import * as React from 'react';
import Navbar from '../Navbar/Navbar';


export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <div>
      <Navbar />
    </div>
  );
}
