import React, {useContext}from 'react';
import MainNavigation from '../components/MainNavigation';
import './Products.css';
import shopContext from '../context/shop-context';

const ProductsPage = props => {

  const context = useContext(shopContext);

  return (
        <React.Fragment>
          <MainNavigation
            cartItemNumber={context.cart.length}
          />
          <main className="products">
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - €{product.price}
                  </div>
                  <div>
                    <button
                      onClick={() => context.addProductToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </React.Fragment>
  );
};

export default ProductsPage;
