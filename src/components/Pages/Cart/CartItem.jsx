import React from 'react';

import { useDispatch } from 'react-redux'
import { removeItem, minusItem, addItem } from '../../../redux/slices/cartSlice';

import deleteIcon from '../../../assets/img/delete_icon.png';

import './Cart.scss'

const CartItem = ({ id, name, imageUrl, price, size, count }) => {

   const dispatch = useDispatch();

   const onClickRemove = () => {
      if (window.confirm('Are you sure you want to remove item?')) {
        dispatch(removeItem({id, size}));
      }
   }

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
            <p onClick={() => dispatch(minusItem({id, size}))}>-</p>
            <span>{count}</span>
            <p onClick={() => dispatch(addItem({id, size}))}>+</p>
         </div>
         <div className='cart_item_price'>{price*count}$</div>
         <div onClick={onClickRemove} >
            <img className="cart_item_remove" src={deleteIcon} alt="" />
         </div>
      </li>
   );
}

export default CartItem;