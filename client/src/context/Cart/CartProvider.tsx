import { useState } from "react";
import type { Product } from "../../types/product.interface";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cart.findIndex((item) => item.id === product.id);
    if (existingItem !== -1) {
      // If the item already exists in the cart, update its quantity
      setCart(() => {
        const updatedItems = [...cart];
        updatedItems[existingItem].quantity++;
        return updatedItems;
      });
    } else {
      // If the item doesn't exist, add it to the cart
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
