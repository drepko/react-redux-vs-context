import React, {useReducer, useContext } from 'react';
import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';


const GlobalState = props => {
  // const products = [
  //   { id: 'p1', title: 'Milk', price: 0.99 },
  //   { id: 'p2', title: 'Eggs', price: 1.99 },
  //   { id: 'p3', title: 'Butter', price: 0.99 },
  //   { id: 'p4', title: 'Bread', price: 2.99 }
  // ];

  // const initialShop = {
  //   products: [
  //     { id: 'p1', title: 'Milk', price: 0.99 },
  //     { id: 'p2', title: 'Eggs', price: 1.99 },
  //     { id: 'p3', title: 'Butter', price: 0.99 },
  //     { id: 'p4', title: 'Bread', price: 2.99 }
  //   ],
  //   cart: [],
  // }

  //const ShopContext = React.createContext(initialShop)

  const context = useContext(ShopContext)

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
      dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: context.products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
