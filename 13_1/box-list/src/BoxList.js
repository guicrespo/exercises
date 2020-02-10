import React, { Component } from 'react';

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      str: '',
      open: false,
    }
  }

  changeStr(letter) {
    this.setState({ str: letter })
  }

  renderList() {
    const letters = ['a', 'b', 'c', 'd'];
    this.setState({ open: true });
    return (
      letters.map(letter =>
        <li onClick={(letter) => this.changeStr(letter)}>
          {letter}
        </li>
      )
    );
  }

  render() {

    // if (!this.state.open) {
    //   return (
    //     <div>{this.props.children}</div>
    //   )
    // }

    return (
      <div>
        <div onClick={() => this.renderList()}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default BoxList;
