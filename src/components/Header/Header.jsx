import React from 'react';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import Cart from './Cart/Cart';

const Header = ({search, setSearch}) => {
   return (
      <header className='header'>
         <Logo />
         <Search search={search} setSearch={setSearch}/>
         <Cart />
      </header>
   );
}

export default Header;