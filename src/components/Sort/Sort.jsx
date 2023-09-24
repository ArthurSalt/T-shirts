import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType } from '../../redux/slices/filterSlice'

import './Sort.css'

const Sort = () => {
   const [modal, setModal] = React.useState(false);
   const sortType = useSelector(state => state.filter.sortType);
   const dispatch = useDispatch();

   const list = ['name', 'rating', 'price'];

   const onSelectedSort = (type) => {
      dispatch(setSortType(type));
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
               {list.map(type => (
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