import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   categoryType: 0,
   sortType: 'name',
   sortOrderType: 'asc',
   searchValue: '',
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
      },

      setSortOrderType(state, action) {
         state.sortOrderType = action.payload
      },

      setSearchValue(state, action) {
         state.searchValue = action.payload
      }
   },
})


export const { setCategoryType, setSortType, setSortOrderType, setSearchValue } = filterSlice.actions

export default filterSlice.reducer