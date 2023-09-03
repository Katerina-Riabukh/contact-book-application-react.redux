import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import logo from './logo.png';
import { LOGO, LogoImg, NavLinkStyled } from './NavBar.styled';

export const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <LOGO to="/">
        <LogoImg src={logo} alt="logo" width={40} height={35} />
      </LOGO>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="contacts">Contacts book</NavLinkStyled>}
    </>
  );
};
