import React from 'react';
import PokemonCard from './PokemonCard';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  setNewState = () => {
    this.setState((state, props) => {
      return { index: state.index === props.pokemons.length -1 ? 0 : state.index + 1 }
    })
    // const newIndex = this.state.index + 1;
    // this.setState({ index: this.state.index === 8 ? 0 : newIndex });
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
          <PokemonCard pokemon={this.props.pokemons[this.state.index]} />
          {/* {
            pokemons
              .filter((pokemon, index) => index === this.state.index)
              .map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
          } */}
        </div>
      </div>
    )
  }
}

export default Pokedex;
