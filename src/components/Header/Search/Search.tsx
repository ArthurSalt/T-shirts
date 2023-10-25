import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

import { setSearchValue, selectFilter } from '../../../redux/slices/filterSlice';

import styles from './Search.module.scss'

const Search: React.FC = () => {

   const dispatch = useAppDispatch()
   const { searchValue } = useAppSelector(selectFilter)

   return (
      <div className={styles.search}>
         <input onChange={(e) => { dispatch(setSearchValue(e.target.value)) }}
            value={searchValue}
            className={styles.search_input} type="text" placeholder='search...' />
      </div>
   );
}

export default Search;