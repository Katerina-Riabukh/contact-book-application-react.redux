import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReduser } from './contacts/filterSlice';
import { userReduser } from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReduser,
    contacts: contactsReducer,
    filter: filterReduser,
  },
});
