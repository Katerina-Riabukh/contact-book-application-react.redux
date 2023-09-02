import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import logo from './logo.png';
import { LOGO, NavLinkStyled } from './NavBar.styled';

export const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <LOGO to="/">
        <img src={logo} alt="logo" width={30} height={30} />
      </LOGO>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="contacts">Contacts book</NavLinkStyled>}
    </>
  );
};
