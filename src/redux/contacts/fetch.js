import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = 'https://64e4deaac55563802913e01c.mockapi.io/'
const BASE_URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const response = await fetch(`${BASE_URL}/contacts/ `, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
      }).then(response => response.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (dispatch, thunkAPI) => {
    const state = thunkAPI.getState();
    const { name, number } = dispatch;
    try {
      const response = await fetch(`${BASE_URL}/contacts/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify({ name, number }),
      }).then(responce => responce.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (dispatch, thunkAPI) => {
    const { id } = dispatch;
    const state = thunkAPI.getState();
    try {
      const response = await fetch(`${BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
      }).then(responce => responce.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
