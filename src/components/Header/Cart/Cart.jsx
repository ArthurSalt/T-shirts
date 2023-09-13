import React from 'react';

import { Link } from 'react-router-dom';

import cartIcon from '../../../assets/img/cart_icon.png';

import styles from './Cart.module.scss'

const Cart = () => {
   return (
      <div className={styles.cart_wrapper}>
         <Link to='/cart' className={styles.cart}>
            <p>$4050</p>
            <p>|</p>
            <img className={styles.cart_img} src={cartIcon} alt="cart_logo" />
            <b>5</b>
         </Link>
      </div>
   );
}

export default Cart;