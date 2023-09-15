import React from 'react';

import styles from './Search.module.scss'

const Search = ({search, setSearch}) => {
   
   return (
      <div className={styles.search}>
         <input onChange={(e) => {setSearch(e.target.value)}} value={search} className={styles.search_input} type="text" placeholder='search...' />
      </div>
   );
}

export default Search;