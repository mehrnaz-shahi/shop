import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import productsReducer from '../features/product/producstSlice';
import cartsReducer from '../features/cart/cartSlicer';
import { getDefaultNormalizer } from '@testing-library/react';

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartsState: cartsReducer,
  // Add more reducers here if you have additional features
});


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

