import styled from 'styled-components';
import { FlexCenter } from '../../../variables/global';

export const PanelPositions = styled(FlexCenter)`
  flex-direction: column;
  border: $border;
  margin: 10px 0px;
  padding: 20px;
  width: 100%;
`;

export const PositionItems = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
