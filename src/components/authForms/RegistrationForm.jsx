import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/user/authFetch';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    dispatch(registration({ email, name, password }));
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'userName':
        setName(value);
        break;
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
        Name
        <input type="text" onChange={handleInputChange} name="userName" />
      </label>
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
