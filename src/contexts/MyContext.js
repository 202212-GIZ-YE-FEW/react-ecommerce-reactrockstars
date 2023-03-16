import React from 'react';

const MyContext = React.createContext({
    products: [],
    setProducts: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    decreaseQuantity: () => {},
  });

export default MyContext;
