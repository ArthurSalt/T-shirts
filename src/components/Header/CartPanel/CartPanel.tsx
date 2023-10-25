import React from 'react';
import { useAppSelector } from '../../../utils/hooks';
import { Link, useLocation } from 'react-router-dom';

import cartIcon from '../../../assets/img/cart_icon.png';

import { selectorCart } from '../../../redux/slices/cartSlice';

import styles from './CartPanel.module.scss'



const CartPanel: React.FC = () => {
   const location = useLocation();

   const { items, totalPrice } = useAppSelector(selectorCart);

   const itemsCount = items.reduce((sum, obj) => sum += obj.count, 0);

   return (
      location.pathname !== '/cart' && <div className={styles.cart_wrapper}>
         <Link to='/cart' className={styles.cart}>
            <p>${totalPrice}</p>
            <p>|</p>
            <img className={styles.cart_img} src={cartIcon} alt="cart_logo" />
            <b>{itemsCount}</b>
         </Link>
      </div>
   );
}

export default CartPanel