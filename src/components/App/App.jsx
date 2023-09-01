import { Header } from 'components/header/Header';
import { Authorisation } from 'pages/Authorisation';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { Registration } from 'pages/Registration';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/user/authFetch';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="authorisation" element={<Authorisation />} />
        <Route path="registration" element={<Registration />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
