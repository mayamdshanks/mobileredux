import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  cartReducer  from '../src/features/cart/cartSlice';
import  modalReducer  from '../src/features/cart/Modal/modalSlice'


const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
