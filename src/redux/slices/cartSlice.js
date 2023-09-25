import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   totalCount: 0,
   items: [{
      "id": 9,
      "name": "Blue and Black",
      "imageUrl": "https://storage.vsemayki.ru/images/0/1/1879/1879869/previews/people_13_man_tshirt_sport_front_white_500.jpg",
      "price": 130,
      "size": "XL",
   }],
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem(state, action) {
         state.items.push(action.payload)
      }
   },
})


export const { addItem } = cartSlice.actions

export default cartSlice.reducer