import { NavLink } from 'react-router-dom';

export const NavUser = () => {
  return (
    <div>
      <NavLink to="registration">Registration</NavLink>
      <NavLink to="authorisation">Authorisation</NavLink>
    </div>
  );
};
