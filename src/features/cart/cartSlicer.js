import { createSlice } from "@reduxjs/toolkit";

// // Action in productSlice
// import { fetchProductsSuccess } from "../product/producstSlice";

const   initialState =  {
  selectedItem: [],
  itemCounter: 0,
  totalPrice: 0,
  checkout: false,
}


export const CartsSlice = createSlice({
  name: "carts",

  initialState,

  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({
          ...action.payload,
          quantity: 1,
        });
      }
      sumItems(state, state.selectedItem);
      state.checkout = false;
    },

    removeItem: (state, action) => {
      const newSelected = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );

      state.selectedItem = newSelected;
      sumItems(state, newSelected);
    },

    increase: (state, action) => {
      const indx = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indx].quantity++;

      sumItems(state, state.selectedItem);
    },

    decrease: (state, action) => {
      const indx2 = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indx2].quantity--;

      sumItems(state, state.selectedItem);
    },

    checkout: (state) => {
      state.selectedItem = [];
      state.itemCounter = 0;
      state.totalPrice = 0;
      state.checkout = true;
    },

    clear: (state) => {
      state.selectedItem = [];
      state.itemCounter = 0;
      state.totalPrice = 0;
      state.checkout = false;
    },
  },


//   // When fetchProductsSuccess executed, state.itemCounter increase
//   extraReducers: (builder) => {
//         builder.addCase(fetchProductsSuccess, (state, action) => {
//             state.itemCounter ++;
//         })
//   }
});

const sumItems = (state, item) => {
    const itemCounter = item.reduce(
      (total, product) => total + product.quantity,
      0
    );
    state.itemCounter = itemCounter;
    const totalPrice = item
      .reduce((total, product) => total + product.quantity * product.price, 0)
      .toFixed(2);
      state.totalPrice = totalPrice;
  };
  

// Export action creators
export const { addItem, removeItem, checkout, clear, increase, decrease } = CartsSlice.actions;

// Export the reducer
export default CartsSlice.reducer;

