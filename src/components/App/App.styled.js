import styled from 'styled-components';

export const Wraper = styled.div`
  padding: 30px;
  padding-bottom: 30px;
  width: 780px;
  height: 580px;
  margin-left: auto;
  margin-right: auto;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 32px;
`;

export const H2 = styled.h2`
  font-size: 28px;
`;

export const ADD = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: 0.5px solid gray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  display: block;
  margin-left: auto;
`;
