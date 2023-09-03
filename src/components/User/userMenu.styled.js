import { styled } from 'styled-components';

export const WRAPER = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const AVATAR = styled.img`
  border-radius: 50px;
  margin-right: 10px;
`;

export const NAME = styled.p`
  display: block;
  /* text-align: center; */
  padding: 5px;
  font-size: 24px;
  width: 70px;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  -webkit-box-orient: horizontal;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const SETTINGS = styled.button`
  width: 30px;
  height: 30px;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
`;

export const BUTTON = styled.button`
  font-family: inherit;
  color: inherit;
  padding: 5px;
  border: transparent;
  cursor: pointer;
  background-color: transparent;
  &:hover,
  :focus {
    scale: 1.1;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 2px;
  }
`;
