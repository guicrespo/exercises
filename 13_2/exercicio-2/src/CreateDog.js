import React, { Component } from 'react';
import Doguitchos from './Doguitchos';

class CreateDog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDog: null,
    };
  }

  addDog() {
    this.setState({ newDog: <Doguitchos /> })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.addDog}>
          Novo dog!
        </button>
        {this.state.newDog}
      </div>


    );
  }
}

export default CreateDog;