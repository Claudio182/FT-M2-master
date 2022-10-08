import React from 'react';
import Logo from '../../logoHenry.png';
import SearchBar from '../Search/SearchBar';
import Style from './Nav.css';

function Nav({onSearch}) {
  return (
    <div className={Style.container}>
      <img id='logoHenry' src={Logo} alt='Logo'></img>
      
      <SearchBar
        onSearch={(ciudad) => alert(ciudad)}
      />
    </div>
  );
};

export default Nav;

