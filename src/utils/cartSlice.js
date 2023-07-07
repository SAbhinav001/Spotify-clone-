import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itmes: ["banana"],
  },
  reducers: {
    addItmes: (state, action) => {
      state.itmes.push(action.payload);
    },
    removeItems: (state, action) => {
      state.itmes.pop();
    },
    clearCart:(state)=>{
        state.itmes =[]
    }
  },
});

export const {addItmes, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
