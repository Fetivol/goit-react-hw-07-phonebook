import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './operations';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //fetch
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fullfield](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //add
    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fullfield](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fullfield](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// export const { newContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
