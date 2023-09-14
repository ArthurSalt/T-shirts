import React, { useState } from 'react';

import styles from './ItemCard.module.scss';



const ItemCard = ({ name, imageUrl, price, sizes, rating }) => {




   return (
      <div className={styles.item}>
         <img className={styles.item_img} src={imageUrl} alt="" />
         <p className={styles.item_title}>{name}</p>
         <p className={styles.item_rating}>Rating: {rating}</p>
         <div className={styles.item_controls}>
            <div className={styles.item_size_row}>
               {sizes.map(size => <li key={size} className={styles.size}>{size}</li>)}
            </div>
         </div>
         <div className={styles.item_buyMenu}>
            <div className={styles.item_price}>{price}$</div>
            <button className={styles.item_addButton}> + Add to cart 0</button>
         </div>
      </div>
   );
}

export default ItemCard;