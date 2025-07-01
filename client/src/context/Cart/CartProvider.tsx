import { useState } from "react";
import { CartContext } from "./CartContext";
import type { Cart } from "../../types/cart.interface";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const addProductToCart = (product: Cart, selectedSize?: string) => {
    const existingItem = cart.findIndex((item) => item.id === product.id);
    const newCart = [...cart];

    if (existingItem !== -1) {
      // If the item already exists in the cart, update its quantity
      newCart[existingItem].quantity++;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(cart));

    } else {
      // If the item doesn't exist, add it to the cart

      setCart((prevCart) => [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          color: product.color,
          size: selectedSize ?? "",
          price: product.price,
          quantity:product.quantity,
        },
      ]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const removeProductFromCart = (product: Cart) => {
    const existingItem = cart.findIndex((item) => item.id === product.id);
    const newCart = [...cart];

    if (newCart[existingItem].quantity > 1) {
      // If the item already exists in the cart, update its quantity
      newCart[existingItem].quantity--;
      setCart(newCart);
    }
    return;
  };

  const deleteProductFromCart = (product: Cart) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
