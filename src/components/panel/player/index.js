import React from 'react';
import './Player.scss';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.setPlayer(this.state.name);
  }

  render() {
    let { changePlayer } = this.props;
    let player;
    if (changePlayer) {
      player = (
        <form className='form__player'>
          <label>Please enter your name</label>
          <div className='form__field'>
            <input
              onChange={this.onNameChange}
              value={this.state.name}
              type='text'
              placeholder='Enter your name'
            />
            <button
              onClick={this.onSubmit}
              type='submit'
              className='field__button'
            >
              OK
            </button>
          </div>
        </form>
      );
    } else {
      player = (
        <div>
          <h3>Current player</h3>
          <div>Name: {this.props.currentPlayer}</div>
          <div># Attempts: {this.props.attempts}</div>
        </div>
      );
    }
    return <div className='panel__player'>{player}</div>;
  }
}

export default Player;
