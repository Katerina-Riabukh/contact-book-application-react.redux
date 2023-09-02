import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const WRAPER = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  color: gray;
`;
