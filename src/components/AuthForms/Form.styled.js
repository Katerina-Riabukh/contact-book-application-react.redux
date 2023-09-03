import { styled } from 'styled-components';

export const FormWraper = styled.div`
  width: 450px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid gray;
`;

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LABEL = styled.label`
  font-family: 'Aclonica';
  color: gray;
  display: flex;
  flex-direction: column;
`;

export const INPUT = styled.input`
  font-family: 'Aclonica';
  font-size: 24px;
`;

export const BUTTON = styled.button`
  font-family: 'Aclonica';
  color: gray;
  display: block;
  padding: 5px;
  margin-top: 20px;

  cursor: pointer;
`;
