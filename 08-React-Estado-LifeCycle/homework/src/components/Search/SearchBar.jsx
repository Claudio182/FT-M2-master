import React from 'react';
import Style from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return <div className={Style.search}>
    <input className={Style.ip} type="text" />
    <button onClick={ () => props.onSearch('hola')}>Agregar</button>
  </div>
};