import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   totalPrice: 0,
   items: [],
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {

      addItem(state, action) {
         const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size)
         if (findItem) {
            findItem.count++;
         } else {
            state.items.push(action.payload);
         }

         state.totalPrice = state.items.reduce((sum, obj) => sum += obj.price * obj.count, 0);
      },

      removeItem(state, action) {
         const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size);
         findItem.count = 0;
         state.items = state.items.filter(obj => obj.count !== 0);
         state.totalPrice = state.items.reduce((sum, obj) => sum += obj.price * obj.count, 0);
      },

      minusItem(state, action) {
         const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size)
         if (findItem.count > 0) {
            findItem.count--;
         };
         if (findItem.count === 0) {
            state.items = state.items.filter(obj => obj.count !== 0);
         };

         state.totalPrice = state.items.reduce((sum, obj) => sum += obj.price * obj.count, 0);

      },

      clearCart(state) {
         state.items = [];
         state.totalPrice = 0;
      }

   },
})


export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions

export default cartSlice.reducer