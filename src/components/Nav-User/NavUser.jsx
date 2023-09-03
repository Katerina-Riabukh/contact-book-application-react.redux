import { NavLinkStyled, WRAPER } from './NavUser.styled';

export const NavUser = () => {
  return (
    <WRAPER>
      <NavLinkStyled to="registration">Registration</NavLinkStyled>
      <NavLinkStyled to="authorisation">Log In</NavLinkStyled>
    </WRAPER>
  );
};
