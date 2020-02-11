import React, { Component } from 'react';

class Doguitchos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
    }
  }

  componentDidUpdate() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({ url: data.message }));
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" />
        </div>
        <div>
          <img src={this.state.url} alt="cachorro" />
        </div>
      </div>
    )
  }
}

export default Doguitchos;
