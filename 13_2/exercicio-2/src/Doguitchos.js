import React, { Component } from 'react';

class Doguitchos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      status: null,
      name: null,
    };

    this.addNewDog = this.addNewDog.bind(this);
    this.addName = this.addName.bind(this);
  }

  newFetch() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({ url: data.message, status: data.status }));
  }

  componentDidMount() {
    this.newFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      this.newFetch();
    }
  }

  addNewDog() {
    this.setState({ status: null })
  }

  addName(event) {
    const { value } = event.target
    let arr = []
    if (event.keyCode === 13) {
      this.setState({ name: value })
      console.log(arr = [...arr, { name: value, url: this.state.url }]);
      arr = [...arr, { name: value, url: this.state.url }];
    }
    console.log(arr)
    return arr;
  }

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.addNewDog}>Novo dog!</button>
        </div>
        <div>
          <input type="text" value={this.name} onKeyUp={this.addName} />
        </div>
        <div>
          <img src={this.state.url} alt="cachorro" />
        </div>
      </div>
    );
  }
}

export default Doguitchos;
