import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from '../features/product/producstSlice';
import cartsReducer from '../features/cart/cartSlicer';

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartsState: cartsReducer,
  // Add more reducers here if you have additional features
});


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

