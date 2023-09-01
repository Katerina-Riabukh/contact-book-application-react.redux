import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import logo from './logo.png';

export const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <NavLink to="/">
        <img src={logo} alt="logo" width={30} height={30} />
      </NavLink>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </>
  );
};
