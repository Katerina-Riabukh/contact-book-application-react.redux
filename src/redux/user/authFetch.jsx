import axios from 'axios';
import { useSelector } from 'react-redux';
// import { getToken } from './userSelectors';

const { createAsyncThunk } = require('@reduxjs/toolkit');
axios.defaults.baseURL = 'https://connections-api.herokuapp.com ';

export const registration = createAsyncThunk(
  'user/registration',
  async credentials => {
    try {
      const data = await fetch(
        'https://connections-api.herokuapp.com/users/signup',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(credentials),
        }
      ).then(response => response.json());
      console.log(data);
      return data;
    } catch (error) {}
  }
);

export const authorisation = createAsyncThunk(
  'user/authorisation',
  async credentials => {
    console.log(JSON.stringify(credentials));
    try {
      const data = await fetch(
        'https://connections-api.herokuapp.com/users/login',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(credentials),
        }
      ).then(response => response.json());
      return data;
    } catch (error) {}
  }
);

export const logOut = createAsyncThunk('user/logout', async token => {
  console.log(token);
  try {
    const data = await fetch(
      'https://connections-api.herokuapp.com/users/logout',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(response => response.json());
    return data;
  } catch (error) {}
});

// export const logOut = createAsyncThunk('user/logout', async () => {
//   try {
//     const { data } = await axios.post('/users/logout');
//     return data;
//   } catch (error) {}
// });

// export const authorisation = createAsyncThunk(
//   'user/authorisation',
//   async credentials => {
//     try {
//       const { data } = await axios.post('/users/login', credentials);
//       return data;
//     } catch (error) {}
//   }
// );

// export const registration = createAsyncThunk(
//   'user/registration',
//   async credentials => {
//     console.log(credentials);
//     try {
//       const { data } = await axios.post('/users/signup', credentials);
//       return data;
//     } catch (error) {}
//   }
// );
