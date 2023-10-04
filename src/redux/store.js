import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice'
import paginationSlice from './slices/paginationSlice'
import fetchItemsSlice from './slices/getItemsSlice'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    pages: paginationSlice,
    items: fetchItemsSlice,
  },
})