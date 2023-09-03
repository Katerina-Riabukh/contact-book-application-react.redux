import styled from 'styled-components';

export const FORM = styled.form`
  margin-bottom: 60px;
`;

export const LABEL = styled.label`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Input = styled.input`
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
  @media (max-width: 767x) {
    font-size: 18px;
  }
`;

export const BUTTON = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: 0.5px solid gray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const BACKDROP = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const MODAL = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 350px;
  padding: 40px;
  background-color: #f1ebdd;
  box-shadow: 5px 7px 15px -6px rgb(24, 26, 32);
  @media (max-width: 767px) {
    max-width: 290px;
  }
`;

export const CLOSE = styled.button`
  display: block;
  margin-left: auto;
  width: 30px;
  height: 30px;
  padding: 0;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  :focus {
    scale: 1.1;
  }
`;
