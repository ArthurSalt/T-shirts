import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/slices/cartSlice';

import cartIcon from '../../../assets/img/cart_icon.png';

import CartItem from './CartItem';

import './Cart.scss'

export const Cart = () => {

   const { items, totalPrice } = useSelector(store => store.cart)

   const dispatch = useDispatch()
   
   const itemsCount = items.reduce((sum, obj) => sum += obj.count, 0);

   const onClickClear = () => {
      if (window.confirm('Are you sure you want to clear cart?')) {
         dispatch(clearCart());
      }
   }


   return (
      <div className='cart_wrapper'>
         <div className='cart_head'>
            <div className='cart_head_left'>
               <img className='cart_logo' src={cartIcon} alt="cart_logo" />
               <h1 className='cart_title'>My Cart</h1>
            </div>
            <div>
               <p onClick={onClickClear} className='cart_clear'>x clear cart</p>
            </div>
         </div>
         <ul className="cart_list">
            {items.length
               ? items.map(item => <CartItem {...item} />)
               : <p className='cart_empty'>Cart is empty.</p>}
         </ul>
         <div className="cart_info">
            <p>Items in cart: {itemsCount}</p>
            <p>Total: <span className='cart_total'>${totalPrice}</span></p>
         </div>
      </div>
   );
}

export default Cart;