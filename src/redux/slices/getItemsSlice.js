import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchItems = createAsyncThunk('fetchItems/fetchItemsStatus',
   async (params) => {
      const { categoryType, sortType, sortOrderType } = params;
      const url = 'https://64efad78219b3e2873c4c415.mockapi.io/items?' +
         `${categoryType ? `category=${categoryType}` : ''}` +
         `&sortBy=${sortType}&order=${sortOrderType}`;

      const { data } = await axios.get(url)

      return data;
   }
)


const initialState = {
   items: [],
   status: '',
}

export const fetchItemsSlice = createSlice({
   name: 'fetchItems',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchItems.pending, (state) => {
            state.status = "loading"
            state.items = []
         })
         .addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = "success"
         })
         .addCase(fetchItems.rejected, (state) => {
            state.status = "error"
            state.items = []
         })
   }
})


export const { setItems } = fetchItemsSlice.actions
export default fetchItemsSlice.reducer