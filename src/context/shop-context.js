import React from 'react';

export default React.createContext({
  products: [
    { id: 'p1', title: 'Milk', price: 0.99 },
    { id: 'p2', title: 'Eggs', price: 1.99 },
    { id: 'p3', title: 'Butter', price: 0.99 },
    { id: 'p4', title: 'Bread', price: 2.99 }
  ],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {}
});
