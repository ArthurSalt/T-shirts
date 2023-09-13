import React from 'react';

import styles from './Search.module.scss'

const Search = () => {

   

   return (
      <div className={styles.search}>
         <input className={styles.search_input} type="text" placeholder='search...' />
      </div>
   );
}

export default Search;