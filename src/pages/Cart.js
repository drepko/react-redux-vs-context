import React, { useContext, useEffect } from 'react';
import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Cart.css';

const CartPage = props => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <MainNavigation
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} 
              </div>
              <div>
                <button
                  onClick={ () => context.removeProductFromCart(cartItem.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default CartPage;
