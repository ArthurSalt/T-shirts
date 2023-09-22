import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryType } from '../../redux/slices/filterSlice';

import './Category.css';

const Category = () => {
   const categories = ['All', 'T-Shirt', 'Hoodie', 'Longsleeve', 'Sweatshirt'];

   const categoryType = useSelector(state => state.filter.categoryType);
   const dispatch = useDispatch();

   console.log(categoryType)
   
   return (
      <ul className='categories'>
         {categories.map((category, idx) => (
            <li key={idx} onClick={() => dispatch(setCategoryType(idx))}
            className={categoryType == idx ? 'category active' : 'category'}>
               {category}
            </li>
         ))}
      </ul>
   );
}

export default Category;