import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   categoryType: 0,
   sortType: 'name',
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {

      setCategoryType(state, action) {
         state.categoryType = action.payload
      },

      setSortType(state, action) {
         state.sortType = action.payload
      }
   },
})


export const { setCategoryType, setSortType } = filterSlice.actions

export default filterSlice.reducer