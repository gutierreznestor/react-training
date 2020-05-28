import React from 'react';
import { FormPlayer, FormField, FieldButton, PanelPlayer } from './Player';

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
    let name = this.state.name ? this.state.name : 'John Doe';
    this.props.setPlayer(name);
  }

  render() {
    let { changePlayer } = this.props;
    let player;
    if (changePlayer) {
      player = (
        <FormPlayer>
          <label>Please enter your name</label>
          <FormField>
            <input
              onChange={this.onNameChange}
              value={this.state.name}
              type='text'
              placeholder='Enter your name'
            />
            <FieldButton onClick={this.onSubmit} type='submit'>
              OK
            </FieldButton>
          </FormField>
        </FormPlayer>
      );
    } else {
      player = (
        <FormPlayer>
          <h3>Current player</h3>
          <FormField>Name: {this.props.currentPlayer}</FormField>
          <FormField># Attempts: {this.props.attempts}</FormField>
        </FormPlayer>
      );
    }
    return <PanelPlayer>{player}</PanelPlayer>;
  }
}

export default Player;
