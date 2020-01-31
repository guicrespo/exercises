import React from 'react';
import Pokemon from './PokemonCard';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        {pokemons.map((pokemon, i) => <Pokemon key={i} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;
