import { createAction } from '@reduxjs/toolkit';

export const newContact = createAction('contacts/addContact');

export const deleteContact = createAction('contacts/deleteContact');

export const filterAction = createAction('filter/change');
