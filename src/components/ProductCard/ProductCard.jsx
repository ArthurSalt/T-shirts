import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { addItem } from '../../redux/slices/cartSlice';

import SizeBar from '../comps/SizeBar/SizeBar';

import './ProductCard.scss'

const ProductCard = () => {
   const dispatch = useDispatch();
   const { id } = useParams();

   const [item, setItem] = useState();
   const [activeSize, setActiveSize] = useState('XL');
   const itemCount = useSelector(state => state.cart.items.find(obj => obj.id === id))
   const addedAmount = itemCount ? itemCount.count : '0';

   useEffect(() => {
      async function fetchItems() {
         try {
            const { data } = await axios.get(`https://64efad78219b3e2873c4c415.mockapi.io/items/${id}`);
            setItem(data)
         } catch (error) {
            alert('Error! Failed to get data from server!')
         }
      }
      fetchItems()
   }, [])

   if (!item) {
      return "Loading..."
   }

   return (
      <div className='product_card'>
         <div>
            <img className='product_img' src={item.imageUrl} alt="img" />
         </div>
         <div className="product_info">
            <h1 className='product_name'>{item.name}</h1>
            <p className='product_rating'>Rating: {item.rating}</p>
            <p className='product_price'>${item.price}</p>
            <div className="product_sizes">
               <SizeBar
                  sizes={item.sizes}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize} />
            </div>
            <div className="product-buy">
               <button onClick={() => dispatch(addItem({...item, count: 1, size: activeSize}))} >{addedAmount > 0 ? `Items in cart: ${addedAmount}` : `+ Add to cart`}</button>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;