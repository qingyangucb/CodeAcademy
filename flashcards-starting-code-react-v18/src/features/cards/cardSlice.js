import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cards",
  initialState: { cards: {} },
  addCard: (state, action) => {
    const { id, front, back } = action.payload;
    state.cards[id] = { id, front, back };
    return state;
  },
});

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
