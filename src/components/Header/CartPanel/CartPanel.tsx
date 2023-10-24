import React from 'react';

import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ICartItem, ICartSlice, selectorCart } from '../../../redux/slices/cartSlice';


import cartIcon from '../../../assets/img/cart_icon.png';

import styles from './CartPanel.module.scss'
import { RootState } from '../../../redux/store';



const CartPanel: React.FC<ICartSlice> = () => {
   const location = useLocation();

   const { items, totalPrice } = useSelector<RootState, ICartSlice>(selectorCart);

   const itemsCount = items.reduce((sum: number, obj: ICartItem) => sum += obj.count, 0);

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