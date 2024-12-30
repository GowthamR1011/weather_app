import * as React from 'react';
import { MdOutlineSearch } from "react-icons/md";
interface ISearchButtonProps {
}

const SearchButton: React.FunctionComponent<ISearchButtonProps> = (props) => {
  return(
    <div className='mx-2 cursor-pointer'>
      <MdOutlineSearch />
    </div>
  ) ;
};

export default SearchButton;
