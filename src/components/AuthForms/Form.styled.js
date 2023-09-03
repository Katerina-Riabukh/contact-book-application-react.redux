import { styled } from 'styled-components';

export const FormWraper = styled.div`
  width: 450px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid gray;
  box-shadow: 5px 7px 15px -6px rgb(24, 26, 32);
  @media (max-width: 767px) {
    max-width: 290px;
  }
`;

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LABEL = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

export const INPUT = styled.input`
  font-family: inherit;
  color: inherit;
  font-size: 24px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  outline: transparent;
  &:focus {
    border-color: #fe9f5e;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const BUTTON = styled.button`
  font-family: inherit;
  color: inherit;
  display: block;
  padding: 5px;
  margin-top: 20px;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #b6dfe2;
  }
`;
