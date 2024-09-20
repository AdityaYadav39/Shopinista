import { configureStore } from '@reduxjs/toolkit';
// import { CounterSlice } from './Slices/counterSlice';
import cartReducer from './Slices/CartSlice';
// import CartSlice from './Slices/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
