import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   totalCount: 0,
   items: [],
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {

      addItem(state, action) {
         state.items.push(action.payload);
         state.totalCount = state.items.reduce((sum, obj) => sum += obj.price, 0);
      },

      removeItem(state, action) {
         state.items = state.items.filter(obj => obj.id !== action.payload);
         state.totalCount = state.items.reduce((sum, obj) => sum += obj.price, 0);
      },

      clearCart(state) {
         state.items = [];
      }

   },
})


export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer