import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    }
  }
})

const store = configureStore({
  reducer: {
    cart:cartSlice.reducer
  }
})
console.log("ONCREATE STORE : ", store.getState());

store.subscribe(() => {
  console.log("ONCHANGE STORE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({id: 5, qty: 10}));
store.dispatch(cartSlice.actions.addToCart({id: 7, qty: 8}));