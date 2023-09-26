import React from 'react';

import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/slices/cartSlice';

import deleteIcon from '../../assets/img/delete_icon.png';

import './Cart.scss'

const CartItem = ({ id, name, imageUrl, price, size }) => {

   const dispatch = useDispatch();

   return (
      <li className='cart_item'>
         <div className='cart_item_head'>
            <div>
               <img className='cart_item_img' src={imageUrl} alt="" />
            </div>
            <div className="cart_item_desc">
               <h1 className='cart_item_name'>{name}</h1>
               <p className='cart_item_size'>Size: {size}</p>
            </div>
         </div>
         <div className="cart_item_amount">
            <p>-</p>
            <p>2</p>
            <p>+</p>
         </div>
         <div className='cart_item_price'>{price}$</div>
         <div onClick={() => dispatch(removeItem(id))} >
            <img className="cart_item_remove" src={deleteIcon} alt="" />
         </div>
      </li>
   );
}

export default CartItem;