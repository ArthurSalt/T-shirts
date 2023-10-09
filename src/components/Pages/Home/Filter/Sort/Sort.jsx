import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType, setSortOrderType } from '../../../../../redux/slices/filterSlice'

import './Sort.css'

const Sort = () => {
   const [modalSort, setModalSort] = React.useState(false);
   const [modalOrder, setModalOrder] = React.useState(false);
   const sortRef = useRef(0);
   const sortOrderRef = useRef(0);
   const sortType = useSelector(state => state.filter.sortType);
   const sortOrderType = useSelector(state => state.filter.sortOrderType);
   const dispatch = useDispatch();

   const list = ['name', 'rating', 'price'];
   const listOrder = ['asc', 'desc'];

   useEffect(() => {
      document.body.addEventListener('click', handleOnClick)
      return () => {
         document.body.removeEventListener('click', handleOnClick)
      }
   }, [])

   const handleOnClick = (e) => {
      if (!e.target.className.includes('sort')) {
         setModalOrder(false)
         setModalSort(false)
      }
   }

   const onSelectedSort = (type) => {
      dispatch(setSortType(type));
      setModalSort(false)
   }

   const onSelectedSortOrder = (type) => {
      dispatch(setSortOrderType(type));
      setModalOrder(false)
   }

   return (
      <div className="sort_wrapper">
         <div ref={sortOrderRef} className="sort">
            <p>Order: <span onClick={() => {setModalOrder(!modalOrder)}} className='sort_type'>{sortOrderType}</span></p>

            {modalOrder && (
               <ul className='sort_popup'>
                  {listOrder.map(type => (
                     <li key={type} onClick={() => onSelectedSortOrder(type)}
                        className={sortOrderType == type ? 'active' : ''}>
                        {type}
                     </li>))}
               </ul>
            )}
         </div>



         <div ref={sortRef} className="sort">
            <p>Sort by <span onClick={() => {
               setModalSort(!modalSort)
            }
            } className='sort_type'>{sortType}</span></p>


            {modalSort && (
               <ul className='sort_popup'>
                  {list.map(type => (
                     <li key={type} onClick={() => onSelectedSort(type)}
                        className={sortType == type ? 'active' : ''}>
                        {type}
                     </li>))}
               </ul>
            )}
         </div>
      </div>
   );
}

export default Sort;