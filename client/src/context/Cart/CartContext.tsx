import { createContext } from "react";
import type { Product } from "../../types/product.interface";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: Product) => void;
  // clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: (product) => product,
  removeFromCart: (id) => id,
  // clearCart: () => {},
});