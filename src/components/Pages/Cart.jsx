import React from 'react';
import { useSelector } from 'react-redux';

import cartIcon from '../../assets/img/cart_icon.png';

import CartItem from './CartItem';

import './Cart.scss'

export const Cart = () => {

   const items = useSelector(store => store.cart.items)
   console.log(items)

   return (
      <div className='cart_wrapper'>
         <div className='cart_head'>
            <div className='cart_head_left'>
               <img className='cart_logo' src={cartIcon} alt="cart_logo" />
               <h1 className='cart_title'>My Cart</h1>
            </div>
            <div>
               <p className='cart_clear'>x clear cart</p>
            </div>

         </div>

         <ul className="cart_list">
            {items.map(item => <CartItem {...item} />
            )}
         </ul>
      </div>
   );
}

export default Cart;