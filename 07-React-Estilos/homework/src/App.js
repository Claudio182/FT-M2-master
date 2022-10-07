import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/Search/SearchBar.jsx';
import data, { Cairns } from './data.js';
import Style from './App.module.css'

function App() {
  return (
    <div className={Style.app}>
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div className={Style.search}>
        <Cards
          cities={data}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
