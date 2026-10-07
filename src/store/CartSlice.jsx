import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload }) {
      const existing = state.items.find((i) => i.id === payload.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...payload, quantity: 1 });
    },
    removeItem(state, { payload: id }) {
      state.items = state.items.filter((i) => i.id !== id);
    },
    updateQuantity(state, { payload: { id, quantity } }) {
      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
        return;
      }
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

export default cartSlice.reducer;
