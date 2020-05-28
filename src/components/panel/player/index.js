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
    this.props.setPlayer(this.state.name || 'John Doe');
  }

  render() {
    let { changePlayer, currentPlayer, attempts } = this.props;
    if (changePlayer) {
      return (
        <PanelPlayer>
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
        </PanelPlayer>
      );
    }
    return (
      <PanelPlayer>
        <FormPlayer>
          <h3>Current player</h3>
          <FormField>Name: {currentPlayer}</FormField>
          <FormField># Attempts: {attempts}</FormField>
        </FormPlayer>
      </PanelPlayer>
    );
  }
}

export default Player;
