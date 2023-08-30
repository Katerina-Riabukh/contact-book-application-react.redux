import { NavUser } from 'components/header/nav-user/NavUser';
import { Outlet } from 'react-router-dom';
import { NavBar } from './nav-bar/NavBar';
import { UserMenu } from 'components/user/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/user/userSelectors';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavBar />
        {isLoggedIn ? <UserMenu /> : <NavUser />}
      </div>
      <Outlet />
    </>
  );
};
