import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './components/data'
import './components/Pokedex.css'

function App() {
  return (
    <div className="App-header App">
      <h1 className="main-title">POKÉDEX</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
