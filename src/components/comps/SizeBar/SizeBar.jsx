import React from 'react';

import styles from './SizeBar.module.scss';

const SizeBar = ({ sizes, activeSize, setActiveSize }) => {

   return (
      <ul className={styles.item_size_row}>
         {sizes.map(size => <li key={size}
            onClick={() => setActiveSize(size)}
            className={`${size === activeSize ? [styles.size, styles.active].join(' ') : styles.size}`}>
            {size}
         </li>)}
      </ul>
   );
}

export default SizeBar;