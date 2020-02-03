import React from 'react';
import PokemonGif from './PokemonGif';

class PokemonCard extends React.Component {
  render() {
    const { name, type, averageWeight } = this.props.pokemon;
    const { image } = this.props.pokemon;
    return (
      <div className="pokemon-card">
        <h3>{name}</h3>
        <PokemonGif image={image} />
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
      </div>
    )
  }
}

export default PokemonCard;
