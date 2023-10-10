import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    newContact: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const { newContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
