import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../../redux/slices/filterSlice';

import styles from './Search.module.scss'

const Search = () => {

   const dispatch = useDispatch()
   const search = useSelector(state => state.filter.searchValue)
   
   return (
      <div className={styles.search}>
         <input onChange={(e) => {dispatch(setSearchValue(e.target.value))}} 
         value={search} 
         className={styles.search_input} type="text" placeholder='search...' />
      </div>
   );
}

export default Search;