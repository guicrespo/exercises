import React from 'react';
import PokemonCard from './PokemonCard';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  setNewState = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: this.state.index === 8 ? 0 : newIndex });
  }

  render() {
    const pokemons = this.props.pokemons;
    return (
      <div>
        <div>
          <button onClick={this.setNewState}>
            Próximo Pokémon
          </button>
        </div>
        <div className="pokedex-items">
          {
            pokemons
              .filter((pokemon, index) => index === this.state.index)
              .map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
          }
        </div>
      </div>
    )
  }
}

export default Pokedex;
