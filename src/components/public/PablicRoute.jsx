import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/user/userSelectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return !isLoggedIn ? children : <Navigate to="/" />;
};
