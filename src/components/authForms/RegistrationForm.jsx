import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registration } from 'redux/user/authFetch';
import { BUTTON, FORM, FormWraper, INPUT, LABEL } from './Form.styled';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registration({ email, name, password })).then(() => {
      toast('You registrated successfully =)', {
        position: 'top-right',
        autoClose: 3000,
      }).catch(error => {
        toast.error('Something wrong with your e-mail or password .(');
      });
    });
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
    <FormWraper>
      <FORM onSubmit={handleSubmit}>
        <LABEL>
          Name
          <INPUT type="text" onChange={handleInputChange} name="userName" />
        </LABEL>
        <LABEL>
          E-mail
          <INPUT type="text" onChange={handleInputChange} name="email" />
        </LABEL>
        <LABEL>
          Password
          <INPUT
            type="text"
            onChange={handleInputChange}
            name="password"
            minLength={7}
          />
        </LABEL>
        <BUTTON>Log In</BUTTON>
      </FORM>
    </FormWraper>
  );
};
