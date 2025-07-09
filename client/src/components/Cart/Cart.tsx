import { Minus, Plus } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import type { Cart as CartInterface } from "../../types/cart.interface";

export const Cart = () => {
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart,
  } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const storagedCart = (() => {
   const stored = localStorage.getItem("cart");
   return stored ? JSON.parse(stored) : null;
 })();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded h-screen">
      <h2 className="text-3xl font-bold mb-6 text-zinc-800">
        Carrito de compras
      </h2>
      {cart.length === 0 ? (
        <p className="text-zinc-500 text-center text-2xl mt-10">
          Tu carrito está vacío.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {storagedCart.map((product: CartInterface) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center justify-between gap-4 border-b pb-4"
            >
              <div className="flex gap-4 w-full md:w-2/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-1/2 h-64 object-cover rounded-md border"
                />
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {product.name}
                  </h3>
                  <p className="text-zinc-600">
                    Color: <span className="font-bold">{product.color}</span>
                  </p>
                  <p className="text-zinc-600">
                    Talle: <span className="font-bold">{product.size}</span>
                  </p>
                  <p className="text-zinc-800 font-bold">${product.price}</p>
                </div>
              </div>
              <div className="flex  gap-4">
                <button
                  className="bg-zinc-900 text-white px-2 py-1 rounded hover:bg-zinc-800 cursor-pointer "
                  onClick={() => removeProductFromCart(product)}
                >
                  <Minus />
                </button>
                <span className="text-zinc-900 font-semibold text-3xl">
                  {product.quantity}
                </span>
                <button
                  className="bg-zinc-900 text-white px-2 py-1 rounded hover:bg-zinc-800 cursor-pointer "
                  onClick={() => addProductToCart(product)}
                >
                  <Plus />
                </button>
              </div>
              <button
                className="text-red-600 hover:underline cursor-pointer"
                onClick={() => deleteProductFromCart(product)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <span className="text-xl font-bold text-zinc-900">Total:</span>
            <span className="text-2xl font-bold text-zinc-900">${total}</span>
          </div>
          <button className="w-full bg-zinc-900 text-white py-3 rounded hover:bg-zinc-800 text-lg font-semibold mt-4 cursor-pointer">
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};
