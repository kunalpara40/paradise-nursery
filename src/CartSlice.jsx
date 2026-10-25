import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.name === product.name);
      if (!existing) {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      // payload is the plant name (string)
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
    updateQuantity(state, action) {
      // payload: { name, quantity }
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
