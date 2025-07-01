import { createContext } from "react";
import type { Cart } from "../../types/cart.interface";

interface CartContextType {
  cart: Cart[];
  addProductToCart: (product: Cart,selectedSize?:string) => void;
  removeProductFromCart: (product: Cart) => void;
  deleteProductFromCart: (id: Cart) => void;
  // clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addProductToCart: (product) => product,
  removeProductFromCart: (product) => product,
  deleteProductFromCart: (id) => id,
  // clearCart: () => {},
});
