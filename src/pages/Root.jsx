import React, { createContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navigation/NavBar';

export const CartContext = createContext();

const Root = () => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, quantity: 1, imageSrc: product.images[0] || 'default-image-url.jpg' },
        ];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const resetCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, resetCart }}>
      <div>
        <NavBar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </CartContext.Provider>
  );
};

export default Root;