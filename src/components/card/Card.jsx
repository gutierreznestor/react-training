import styled from 'styled-components';
import { FlexCenter, color, background } from '../../variables/global';

export const Card = styled(FlexCenter)`
  width: 100px;
  height: 100px;
  margin: 5px;
  color: ${color.black};
  border-radius: 5px;
`;

export const CardFront = styled(Card)`
  background-color: ${background.item_orange};
  flex-grow: 1;
`;

export const CardBack = styled(Card)`
  background-color: ${background.item_blue};
  flex-grow: 1;
`;
