import * as React from 'react';

export interface IFooterProps {
}

export default function  Footer (props: IFooterProps) {
  return (
    <footer className='bg-indigo-500
             text-xl text-white text-center 
             fixed 
             inset-x-0 
             bottom-0 
             p-2'>
      Footer
    </footer>
  );
}
