import React from 'react';
import './Cofre.css';
import PropTypes from 'prop-types';
​
class Cofre extends React.Component {
​
    constructor(props) {
        super(props);
        this.state = {inputContent: '', verified: false};
    }
​
    inputDigits = (digit) => {
        this.setState(state => ({inputContent: `${state.inputContent}${digit}`}))
    }
​
    checkPassword = () => {
        const {safeOwner, alertPhrase} = this.props.alertMessageData;
​
        if(this.state.inputContent === this.props.correctPassword) {
            this.setState({verified: true})
        } else {
            alert(`${safeOwner}, ${alertPhrase}`)
            this.setState({inputContent: ''})
        }
    }
​
    render() {
        const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
​
        if(this.state.verified) {
            return (
                <div>{this.props.children}</div>
            );
        }
​
        return (
            <div className="safe">
                <div className="keyboard">
                    <input className="keyboard-element" type="text" value={this.state.inputContent}/>
                    {digits.map(digit =>
                        <button key={digit} type="button" className="keyboard-button" onClick={() => this.inputDigits(digit)}>
                            {digit}
                        </button>
                    )}
                    <button type="button" className="keyboard-element" onClick={this.checkPassword}>Inserir senha</button>
                </div>
            </div>
        );
    }
}
​
Cofre.defaultProps = {
    alertMessageData: { safeOwner: 'anônimo', alertPhrase: 'seu acesso foi negado'},
}
​
Cofre.propTypes = {
    children: PropTypes.element.isRequired,
    correctPassword: PropTypes.string.isRequired,
    alertMessageData: PropTypes.shape({
        safeOwner: PropTypes.string,
        alertPhrase: PropTypes.string,
    })
}
​
export default Cofre;