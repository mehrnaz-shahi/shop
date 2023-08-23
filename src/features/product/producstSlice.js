import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    productList: [],
    error: '',
  },
  reducers: {
    fetchProductsRequest: (state) => {
        state.loading = true; 
      },
      fetchProductsSuccess: (state, action) => {
        state.loading = false;
        state.productList = action.payload; // Update productList with data from action payload
        state.error = ''; // Reset errors
      },
      fetchProductsFailure: (state, action) => {
        state.loading = false;
        state.productList = []
        state.error = action.payload; // Update errors with data from action payload
      }, 
     },
})


export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(fetchProductsRequest());

      await axios.get('https://fakestoreapi.com/products/')
        .then(response => {
            const products = response.data;
            dispatch(fetchProductsSuccess(products));
        })
        .catch(error => {
            const errorMessege = error.message;
            dispatch(fetchProductsFailure(errorMessege));
        })
    };
  };

// Export action creators
export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;

// Export the reducer
export default productsSlice.reducer;