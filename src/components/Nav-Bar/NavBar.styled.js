import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LOGO = styled(NavLink)`
  margin-right: 30px;
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
`;
