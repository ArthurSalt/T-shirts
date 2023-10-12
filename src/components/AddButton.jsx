import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addItem } from '../redux/slices/cartSlice';


const AddButton = ({ newItem }) => {
   const dispatch = useDispatch();
   const itemCount = useSelector(state => state.cart.items.filter(obj => obj.id === newItem.id).reduce((sum, obj) => sum += obj.count, 0))

   return (
      <>
         <button
            onClick={() => dispatch(addItem(newItem))}
            className={itemCount > 0 ? 'item_addedButton' : 'item_addButton'}>
            {itemCount > 0 ? `Items in cart: ${itemCount}` : `+ Add to cart`}
         </button>
      </>
   );
}

export default AddButton;