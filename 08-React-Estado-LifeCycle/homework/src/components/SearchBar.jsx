import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [text, setText] = useState('');
  let handleChange = (evento) => {
    console.log(evento.target.value)
    setText(evento.target.value)
    
  }

  return (
    <form className="search" onSubmit={(evento) => {
      evento.preventDefault();
      onSearch(text);
    }}>
      <input className="ip"
        type="text"
        placeholder="Ciudad..."
        onChange={ evento => handleChange(evento)} 
      />
      <input 
        className="btn" 
        type="submit" 
        value="Agregar" />
    </form>
  );
}
