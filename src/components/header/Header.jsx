import styled from 'styled-components';
import { border, color } from '../../variables/global';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  font-size: 1.2rem;
  border-bottom: 1px solid ${border.white};
`;

export const Logo = styled.div`
  background-color: ${color.white};
  color: ${color.black};
  padding: 3px 20px;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ActionsButton = styled.div`
  padding: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;
