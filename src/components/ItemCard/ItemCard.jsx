import React, { useState } from 'react';

import styles from './ItemCard.module.scss';

import {useDispatch} from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice';


const ItemCard = ({ id, name, imageUrl, price, sizes, rating }) => {
   const dispatch = useDispatch();
   const [activeSize, setActiveSize] = useState('XL')

   const newItem = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize
   }



   return (
      <div className={styles.item}>
         <img className={styles.item_img} src={imageUrl} alt="" />
         <p className={styles.item_title}>{name}</p>
         <p className={styles.item_rating}>Rating: {rating}</p>
         <div className={styles.item_controls}>
            <ul className={styles.item_size_row}>
               {sizes.map(size => <li key={size}
                  onClick={() => setActiveSize(size)}
                  className={`${size === activeSize ? [styles.size, styles.active].join(' ') : styles.size}`}>
                  {size}
               </li>)}
            </ul>
         </div>
         <div className={styles.item_buyMenu}>
            <div className={styles.item_price}>{price}$</div>
            <button onClick={() => dispatch(addItem(newItem))} className={styles.item_addButton}> + Add to cart 0</button>
         </div>
      </div>
   );
}

export default ItemCard;