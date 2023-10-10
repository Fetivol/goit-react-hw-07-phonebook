import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change(state, action) {
      return action.payload;
    },
  },
});

export const { change } = slice.actions;
export const filterReducer = slice.reducer;
