import {configureStore, createReducer, createAction} from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART")
const login = createAction("CREATE_SESSION")

const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true
  })
})

const cartReducer = createReducer([],(builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload)
  })
});

const store = configureStore({
  reducer: {
    login:loginReducer,
    cart:cartReducer
  }
});
console.log("ONCREATE STORE : ", store.getState());

store.subscribe(() => {
  console.log("ONCHANGE STORE : ", store.getState());
});


store.dispatch(addToCart({id: 5, qty: 10}));
store.dispatch(addToCart({id: 7, qty: 8}));
store.dispatch(login())