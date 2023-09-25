import React from 'react';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import CartPanel from './CartPanel/CartPanel';

const Header = ({search, setSearch}) => {
   return (
      <header className='header'>
         <Logo />
         <Search search={search} setSearch={setSearch}/>
         <CartPanel/>
      </header>
   );
}

export default Header;