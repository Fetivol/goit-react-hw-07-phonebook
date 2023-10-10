import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 300px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f1f1;
`;

export const StyledField = styled(Field)`
  margin-left: 5px;
  background-color: #e8edfc;
  border-radius: 10px;
  padding-left: 5px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

export const Label = styled.label`
  margin-top: 10px;
`;
export const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;

  border-radius: 10px;
  &:hover {
    background-color: #fff;
  }
`;
