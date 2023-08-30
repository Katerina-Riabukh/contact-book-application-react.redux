import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// const BASE_URL = 'https://64e4deaac55563802913e01c.mockapi.io/'
const BASE_URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token = useSelector(state => state.user.token);
    try {
      const response = await fetch(`${BASE_URL}/contacts/ `, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
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
  async dispatch => {
    const { name, number, token } = dispatch;
    try {
      const response = await fetch(`${BASE_URL}/contacts/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, number }),
      }).then(responce => responce.json());
      return response;
    } catch (error) {}
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async dispatch => {
    const { id, token } = dispatch;
    try {
      const response = await fetch(`${BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then(responce => responce.json());
      return response;
    } catch (error) {}
  }
);
