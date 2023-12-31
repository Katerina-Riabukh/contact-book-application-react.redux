import styled from 'styled-components';

export const LI = styled.li`
  margin-bottom: 10px;
  display: flex;
`;
export const Name = styled.span`
  font-family: 'Aclonica';
  color: gray;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  margin-right: 40px;
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Button = styled.button`
  display: block;
  margin-left: auto;
  padding: 2px;
  border-radius: 5px;
  border: 0.5px solid gray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const NUMBER = styled.span`
  font-family: 'Aclonica';
  color: gray;
`;
