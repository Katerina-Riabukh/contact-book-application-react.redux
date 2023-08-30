import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/user/userSelectors';

export const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <NavLink to="/">
        <img src="" alt="logo" width={30} height={30} />
      </NavLink>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </>
  );
};
