import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/');
    return response.data; // Return the data from the response
  } catch (error) {
    throw new Error('Error fetching products');
  }
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    productList: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
        state.error = '';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.productList = [];
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
