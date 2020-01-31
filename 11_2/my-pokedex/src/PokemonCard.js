import React from 'react';
// import PokemonGif from './PokemonGif';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Average weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt="imagem animada de pokémon" />
      </div>
    )
  }
}

export default Pokemon;
