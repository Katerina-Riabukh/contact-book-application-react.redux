import { Header } from 'components/Navigation/Header';
import { PrivatRoute } from 'components/PrivatRoute';
import { PublicRoute } from 'components/PablicRoute';
import { Authorisation } from 'pages/Authorisation';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { Registration } from 'pages/Registration';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/user/authFetch';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="authorisation"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<Authorisation />}
              />
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivatRoute
                redirectTo="/authorisation"
                component={<Contacts />}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
