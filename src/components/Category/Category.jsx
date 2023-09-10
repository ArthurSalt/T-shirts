import React from 'react';

import './Category.css';

const Category = () => {
   const [categoryType, setCategoryType] = React.useState(0)

   const categories = ['All', 'T-Shirt', 'Hoodie', 'Longsleeve', 'Sweatshirt'];

   return (
      <ul className='categories'>
         {categories.map((category, idx) => (
            <li onClick={() => setCategoryType(idx)}
            className={categoryType == idx ? 'category active' : 'category'}>
               {category}
            </li>
         ))}
      </ul>
   );
}

export default Category;