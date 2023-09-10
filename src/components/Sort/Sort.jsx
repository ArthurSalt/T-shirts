import React from 'react';

import './Sort.css'

const Sort = () => {
   const [modal, setModal] = React.useState(false);
   const [sortType, setSortType] = React.useState(0);

   const list = ['name', 'popularity', 'price'];

   const onSelectedSort = (idx) => {
      setSortType(idx);
      setModal(false)
   }

   return (
      <div className="sort">
         <p>Sort by <span onClick={() => {
            setModal(!modal)
            console.log(modal)
         }
         } className='sort_type'>{list[sortType]}</span></p>


         {modal && (
            <ul className='sort_popup'>
               {list.map((type, idx) => (
                  <li onClick={() => onSelectedSort(idx)}
                     className={sortType == idx ? 'active' : ''}>
                     {type}
                  </li>))}
            </ul>
         )}

      </div>
   );
}

export default Sort;