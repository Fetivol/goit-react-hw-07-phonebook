import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f1f1;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 10px;
`;

export const ListElem = styled.li``;

export const Button = styled.button`
  margin-left: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #fff;
  }
`;
