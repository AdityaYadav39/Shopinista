import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: "cart",
    initialState:[], // Set initialState as an object with an "items" property
    reducers: {
      Add: (state, action) => {
        state.push(action.payload);
      },
      Remove: (state, action) => {
        return state.filter((item) => item.id !== action.payload);
      },
    },
  });

export const{Add,Remove} = CartSlice.actions;
export default CartSlice.reducer;