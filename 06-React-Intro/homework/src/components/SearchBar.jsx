import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input className='ip' type="text" />
    <button onClick={ () => props.onSearch('hola')}>Agregar</button>
  </div>
};