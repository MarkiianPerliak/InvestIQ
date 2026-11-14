import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { filterValue } from './constants';

interface FilterState {
  filter: string | undefined;
}

const initialState: FilterState = {
  filter: filterValue.all,
};

const filterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string | undefined>) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
