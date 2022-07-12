import styled from 'styled-components';

export const ListBtn = styled.ul`
  display: flex;
  margin-bottom: 30px;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
export const Btn = styled.button`
  background-color: white;
  border: 1px solid #0000002f;
  font-weight: 700;
  border-radius: 5px;
  padding: 5px 10px;
`;
