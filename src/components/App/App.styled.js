import styled from 'styled-components';

export const Wraper = styled.div`
  padding: 30px;
  padding-bottom: 30px;
  max-width: 1180px;
  /* height: 580px; */
  margin-left: auto;
  margin-right: auto;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 32px;
`;

export const H2 = styled.h2`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  line-height: calc(44 / 28);
  width: 250px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 424px) {
    font-size: 22px;
    line-height: calc(44 / 22);
  }
`;

export const IMG = styled.img`
  @media (max-width: 1100px) {
    margin-top: 92px;
  }
  @media (max-width: 767px) {
    margin-top: 190px;
  }
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

export const HomeWraper = styled.div`
  position: relative;
  padding: 30px;
  padding-bottom: 30px;
  max-width: 1180px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  /* outline: 1px solid red; */
`;
