import React from 'react';
import Style from './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';


export default function App() {
  return (
    <div className={Style.App}>
      <div className={Style.row}>
        <Nav 
        />
        <h1>Henry Weather App</h1>
        <Cards
        />
      </div>
    </div>
  );
}
