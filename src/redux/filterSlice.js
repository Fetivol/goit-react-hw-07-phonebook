import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterAction(state, action) {
      return action.payload;
    },
  },
});

export const { filterAction } = slice.actions;
export const filterReducer = slice.reducer;
