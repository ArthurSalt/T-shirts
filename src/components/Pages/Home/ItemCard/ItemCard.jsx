import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import SizeBar from '../../../comps/SizeBar/SizeBar';

import { addItem } from '../../../../redux/slices/cartSlice';

import styles from './ItemCard.module.scss';

const ItemCard = ({ id, name, imageUrl, price, sizes, rating }) => {
   const itemCount = useSelector(state => state.cart.items.find(obj => obj.id === id))
   const dispatch = useDispatch();
   const [activeSize, setActiveSize] = useState('XL');
   const addedAmount = itemCount ? itemCount.count : '0';

   const newItem = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      count: 1
   }



   return (
      <div className={styles.item}>
         <Link to={`/cart/${id}`}><img className={styles.item_img} src={imageUrl} alt="" /></Link>
         <p className={styles.item_title}>{name}</p>
         <p className={styles.item_rating}>Rating: {rating}</p>
         <div className={styles.item_controls}>
            <SizeBar
               sizes={sizes}
               activeSize={activeSize}
               setActiveSize={setActiveSize} />
         </div>
         <div className={styles.item_buyMenu}>
            <div className={styles.item_price}>{price}$</div>
            <button onClick={() => dispatch(addItem(newItem))} className={addedAmount > 0 ? styles.item_added : styles.item_addButton}>{addedAmount > 0 ? `Items in cart: ${addedAmount}` : `+ Add to cart`}</button>
         </div>
      </div>
   );
}

export default ItemCard;