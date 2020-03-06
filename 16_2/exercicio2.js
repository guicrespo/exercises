class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({ input: event.target.value });
  };

  submitMessage() {
    this.setState((state) => ({ input: '', messages: [...state.messages, state.input] }))
  };

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */}
        <input
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button
          type="button"
          onClick={this.submitMessage}
        >
          Submit
        </button>
        <ul>
          {messages.map((element) =>
            <li>{element}</li>)}
        </ul>
        { /* change code above this line */}
      </div>
    );
  }
};
