import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCost: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalCost = existingItem.unitCost * existingItem.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalCost: action.payload.unitCost,
        });
      }
      updateTotalCost(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      updateTotalCost(state);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalCost = item.unitCost * item.quantity;
        updateTotalCost(state);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalCost = item.unitCost * item.quantity;
        updateTotalCost(state);
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      updateTotalCost(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCost = 0;
    },
  },
});

function updateTotalCost(state) {
  state.totalCost = state.items.reduce((sum, item) => sum + item.totalCost, 0);
}

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
