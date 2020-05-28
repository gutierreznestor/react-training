import styled from 'styled-components';
import { color, FlexCenter, border } from './variables/global';

export const StyledApp = styled.div`
  background-color: ${color.black};
  min-height: 100vh;
  font-size: $font-size;
  color: ${color.white};
`;

export const AppContent = styled(FlexCenter)`
  height: 100%;
  padding: 30px;
`;

export const AppPanel = styled(FlexCenter)`
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  min-width: 300px;
  padding: 20px;
  margin: 10px;
`;

export const AppFooter = styled(FlexCenter)`
  height: 50px;
  flex-direction: row;
  border-top: ${border.white};
`;
