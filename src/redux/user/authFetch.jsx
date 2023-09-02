import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setUserHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registration = createAsyncThunk(
  'user/registration',
  async credentials => {
    console.log(credentials);
    try {
      const { data } = await axios.post('/users/signup', credentials);
      return data;
    } catch (error) {}
  }
);

export const authorisation = createAsyncThunk(
  'user/authorisation',
  async credentials => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      return data;
    } catch (error) {}
  }
);

export const logOut = createAsyncThunk('user/logout', async token => {
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

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    if (token === null) {
      thunkAPI.rejectWithValue();
    }
    try {
      setUserHeader(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logOut = createAsyncThunk('user/logout', async () => {
//   try {
//     const { data } = await axios.post('/users/logout');
//     return data;
//   } catch (error) {}
// });

// export const registration = createAsyncThunk(
//   'user/registration',
//   async (credentials, thunkAPI) => {
//     try {
//       const data = await fetch(
//         'https://connections-api.herokuapp.com/users/signup',
//         {
//           method: 'POST',
//           headers: { 'content-type': 'application/json' },
//           body: JSON.stringify(credentials),
//         }
//       ).then(response => response.json());
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const authorisation = createAsyncThunk(
//   'user/authorisation',
//   async (credentials, thunkAPI) => {
//     try {
//       const data = await fetch(
//         'https://connections-api.herokuapp.com/users/login',
//         {
//           method: 'POST',
//           headers: { 'content-type': 'application/json' },
//           body: JSON.stringify(credentials),
//         }
//       ).then(response => response.json());
//       // if (data==={}) {
//       //   thunkAPI.rejectWithValue();
//       // }
//       return data;
//     } catch (error) {
//       console.log(thunkAPI.rejectWithValue(error.message));
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
