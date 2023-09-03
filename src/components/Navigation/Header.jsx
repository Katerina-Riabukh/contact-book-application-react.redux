import { NavUser } from 'components/Nav-User/NavUser';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import { Container } from './Header.styled';
import { NavBar } from '../Nav-Bar/NavBar';
import { UserMenu } from 'components/User/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Container>
        <NavBar />
        {isLoggedIn ? <UserMenu /> : <NavUser />}
      </Container>
      <Outlet />
    </>
  );
};
