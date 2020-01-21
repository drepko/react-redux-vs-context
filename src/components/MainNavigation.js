import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ShopContext from '../context/shop-context';
import './MainNavigation.css';

const mainNavigation = () =>{

  const context = useContext(ShopContext);
  
  return (<header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/cart">CART ({context.cart.length})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)};

export default mainNavigation;
