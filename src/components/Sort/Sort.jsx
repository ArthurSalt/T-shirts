import React from 'react';

import './Sort.css'

const Sort = ({sortType, setSortType}) => {
   const [modal, setModal] = React.useState(false);
   

   const list = ['name', 'rating', 'price'];

   const onSelectedSort = (type) => {
      setSortType(type);
      setModal(false)
   }

   return (
      <div className="sort">
         <p>Sort by <span onClick={() => {
            setModal(!modal)
         }
         } className='sort_type'>{sortType}</span></p>


         {modal && (
            <ul className='sort_popup'>
               {list.map((type, idx) => (
                  <li key={type} onClick={() => onSelectedSort(type)}
                     className={sortType == type ? 'active' : ''}>
                     {type}
                  </li>))}
            </ul>
         )}

      </div>
   );
}

export default Sort;