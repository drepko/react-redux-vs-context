export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  updatedCart.push({ ...product })
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);
  updatedCart.splice(updatedItemIndex, 1);
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);    
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state); 
    default:
      return state;
  }
};


