import React from 'react';

import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import cartIcon from '../../../assets/img/cart_icon.png';

import styles from './CartPanel.module.scss'

const CartPanel = () => {

   const totalCount = useSelector(state => state.cart.totalCount);
   const items = useSelector(state => state.cart.items);

   return (
      <div className={styles.cart_wrapper}>
         <Link to='/cart' className={styles.cart}>
            <p>${totalCount}</p>
            <p>|</p>
            <img className={styles.cart_img} src={cartIcon} alt="cart_logo" />
            <b>{items.length}</b>
         </Link>
      </div>
   );
}

export default CartPanel