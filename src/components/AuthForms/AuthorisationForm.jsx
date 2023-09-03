import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authorisation } from 'redux/user/authFetch';
import { BUTTON, FORM, FormWraper, INPUT, LABEL } from './Form.styled';

export const AuthorisationForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authorisation({ email, password }))
      .then(res => {
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
    <FormWraper>
      <FORM onSubmit={handleSubmit}>
        <LABEL>
          E-mail
          <INPUT type="text" onChange={handleInputChange} name="email" />
        </LABEL>
        <LABEL>
          Password
          <INPUT type="text" onChange={handleInputChange} name="password" />
        </LABEL>
        <BUTTON>Log In</BUTTON>
      </FORM>
    </FormWraper>
  );
};
