import { createSlice } from '@reduxjs/toolkit';
import { authorisation, logOut, refreshUser, registration } from './authFetch';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: {
    //----REGISTR--------------
    [registration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registration.rejected](state, action) {
      state.isLoggedIn = false;
    },
    //---AUTH----------------------
    [authorisation.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authorisation.rejected](state, action) {
      state.isLoggedIn = false;
    },
    //------LOGOUT----------------
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    //-----REFRESH------------
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const userReduser = userSlice.reducer;
