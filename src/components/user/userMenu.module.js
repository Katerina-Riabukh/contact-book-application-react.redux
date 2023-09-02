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
  text-align: center;
  padding: 5px;
  font-size: 24px;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: horizontal;
`;
