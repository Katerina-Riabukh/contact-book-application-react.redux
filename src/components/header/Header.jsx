import { NavUser } from 'components/header/nav-user/NavUser';
import { Outlet } from 'react-router-dom';
import { NavBar } from './nav-bar/NavBar';
import { UserMenu } from 'components/user/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import { Container, WRAPER } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Container>
        <WRAPER>
          <NavBar />
          {isLoggedIn ? <UserMenu /> : <NavUser />}
        </WRAPER>
      </Container>
      <Outlet />
    </>
  );
};
