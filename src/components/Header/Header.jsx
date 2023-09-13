import React from 'react';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import Cart from './Cart/Cart';

const Header = () => {
   return (
      <header className='header'>
         <Logo />
         <Search />
         <Cart />
      </header>
   );
}

export default Header;