import styled from 'styled-components';

export const FORM = styled.form`
  margin-bottom: 60px;
`;

export const LABEL = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  font-size: 20px;
  font-size: 20px;
  border: 0.5px solid gray;
  border-radius: 5px;
  outline: transparent;
  &:focus {
    border-color: red;
  }
`;

export const BUTTON = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: 0.5px solid gray;
  &:hover {
    background-color: lightgray;
  }
`;

export const BACKDROP = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const MODAL = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 350px;
  padding: 40px;
  background-color: rgb(255, 255, 255);
  box-shadow: 5px 7px 15px -6px rgb(24, 26, 32);
`;

export const CLOSE = styled.button`
  width: 20px;
  height: 20px;
`;
