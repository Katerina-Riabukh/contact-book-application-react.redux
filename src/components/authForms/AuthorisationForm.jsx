import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorisation } from 'redux/user/authFetch';

export const AuthorisationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authorisation({ email, password }));
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail
        <input type="text" onChange={handleInputChange} name="email" />
      </label>
      <label>
        Password
        <input type="text" onChange={handleInputChange} name="password" />
      </label>
      <button>Log In</button>
    </form>
  );
};
