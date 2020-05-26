import React from 'react';
import styled from 'styled-components';
import { color, FlexCenter } from '../../../variables/global';

const PanelPlayer = styled(FlexCenter)`
  border: 1px solid ${color.white};
  flex-direction: column;
  width: 100%;
  margin: 10px 0px;
  padding: 20px;
`;

const FormPlayer = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

const FieldButton = styled.button`
  margin-left: 10px;
  padding: 0px 20px;
`;

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
        <div>
          <h3>Current player</h3>
          <div>Name: {this.props.currentPlayer}</div>
          <div># Attempts: {this.props.attempts}</div>
        </div>
      );
    }
    return <PanelPlayer>{player}</PanelPlayer>;
  }
}

export default Player;
