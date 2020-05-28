import styled from 'styled-components';
import { FlexCenter, color } from '../../../variables/global';

export const PanelPlayer = styled(FlexCenter)`
  border: 1px solid ${color.white};
  flex-direction: column;
  width: 100%;
  margin: 10px 0px;
  padding: 20px;
`;

export const FormPlayer = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

export const FieldButton = styled.button`
  margin-left: 10px;
  padding: 0px 20px;
`;
