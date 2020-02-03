import React from 'react';

class PokemonGif extends React.Component {
  render() {
    const image = this.props.image;
    return (
      <img src={image} alt="imagem animada de pokémon" />
    )
  }
}

export default PokemonGif;
