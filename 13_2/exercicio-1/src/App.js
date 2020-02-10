import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component {
  
  shouldComponentUpdate(nextProps) {
    if (nextProps.myNumber % 3 === 0) return true;
    return false;
  }

  componentDidMount() {
    alert('contador iniciado');
  }

  componentDidUpdate() {
    alert('número adicionado');
  }

  componentWillUnmount() {
    localStorage.setItem(this.props.myNumber, `número ${this.props.myNumber} adicionado`);
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;
