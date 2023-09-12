import React, {useState} from 'react';


const ItemCard = ({ name, imageUrl, price, sizes, category }) => {



   return (
      <div className='item_card'>
         <img className='item_img' src={imageUrl} alt="" />
         <p className='item_title'>{name}</p>
         <p className='item_type'>{category}</p>
         <div className='item_controls'>
            <div className='item_size_row'>
               {sizes.map(size => <li className='size'>{size}</li>)}
            </div>
         </div>
         <div className='item_buyMenu'>
            <div className='item_price'>{price}$</div>
            <button className="item_addButton"> + Add to cart 0</button>
         </div>
      </div>
   );
}

export default ItemCard;