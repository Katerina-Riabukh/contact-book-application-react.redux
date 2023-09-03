import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const WRAPER = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-family: inherit;
  color: inherit;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
