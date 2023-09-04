import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LOGO = styled(NavLink)`
  margin-right: 30px;
  &:hover,
  :focus {
    scale: 1.1;
  }
  @media (max-width: 424px) {
    margin-right: 10px;
  }
`;

export const LogoImg = styled.img`
  max-width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-family: inherit;
  color: inherit;
  font-size: 24px;
  font-weight: 500;
  margin-right: 30px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 424px) {
    font-size: 16px;
    margin-right: 20px;
  }
`;
