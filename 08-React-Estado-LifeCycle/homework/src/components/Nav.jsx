import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='container'>
      <div className='left'>
        <img id='logoHenry' src={Logo} alt='Logo'></img>
        <h3 className='text'>Henry - Weather App</h3>
      </div>
      <SearchBar
        onSearch={onSearch}
      />
    </div>
  );
};

export default Nav;
