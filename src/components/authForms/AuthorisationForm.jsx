import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authorisation } from 'redux/user/authFetch';
import { getIsLoggedIn } from 'redux/user/userSelectors';

export const AuthorisationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(getIsLoggedIn);
  console.log(isLogged);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authorisation({ email, password }))
      .unwrap()
      .then(res => {
        navigate('/');
        toast.success('You have logged in successfully =)', {
          position: 'top-right',
          autoClose: 3000,
        });
      })
      .catch(error => {
        toast.error('Something wrong with your e-mail or password .(');
      });
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
