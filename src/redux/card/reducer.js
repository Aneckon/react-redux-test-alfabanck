import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { base_url } from '../../constants';

export const cardFetch = createAsyncThunk('card/cardfetch', async function () {
  const res = await fetch(base_url);
  const data = await res.json();
  return data;
});

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cardItems: [],
    status: null,
  },
  reducers: {
    setDeleteCard: (state, action) => {
      state.cardItems = state.cardItems.filter((card) => card.character !== action.payload.character);
    },
  },
  extraReducers: {
    [cardFetch.pending]: (state) => {
      state.status = 'loading';
    },
    [cardFetch.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.cardItems = action.payload;
    },
  },
});

export const { setDeleteCard } = cardSlice.actions;
export default cardSlice.reducer;
