import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    query(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = sliceFilter.reducer
export const { query, filter } = sliceFilter.actions;