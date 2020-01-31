import React from 'react';
import PokemonCard from './PokemonCard';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <div className="pokedex-items">
        {pokemons.map((pokemon, i) => <PokemonCard key={i} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;
