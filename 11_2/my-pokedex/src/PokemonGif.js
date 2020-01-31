import React from 'react';

class PokemonGif extends React.Component {
  render() {
    return (
      <img src={this.props.image} alt="imagem animada de pokémon" />
    )
  }
}

export default PokemonGif;
