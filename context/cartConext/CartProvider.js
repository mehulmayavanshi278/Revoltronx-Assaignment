import React, { createContext, useContext, useState } from "react";
import apiService from "../../services/apiService";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const fetchCartItems = async () => {
    try {
      const res = await apiService.getAllCartItems();
      setCartProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartProducts, fetchCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
