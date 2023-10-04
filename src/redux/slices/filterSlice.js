import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   categoryType: 0,
   sortType: 'name',
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

      setSearchValue(state, action) {
         state.searchValue = action.payload
      }
   },
})


export const { setCategoryType, setSortType, setSearchValue } = filterSlice.actions

export default filterSlice.reducer