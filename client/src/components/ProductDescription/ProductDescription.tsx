import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useCart } from "../../hooks/useCart";

export const ProductDescription = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { products, increaseQuantity } = useProducts();
  const { addProductToCart } = useCart();
  const { name } = useParams<{ name?: string }>();
  const searchName = name ?? "";

  const handleSize = (size: any) => {
    setSelectedSize(size);
  };

  return (
    <div className="py-8">
      {products.map((product) => {
        if (product.name.includes(searchName))
          return (
            <div className="flex flex-col gap-8 ">
              <div
                className="flex flex-col md:flex-row  mx-auto gap-4 justify-around"
                key={product.id}
              >
                <div className="w-full flex flex-col ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-3/4 md:h-[600px] object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <h3 className="text-6xl font-bold ">{product.name}</h3>
                  <span className="text-xl">${product.price}</span>
                  <p>
                    Talle: <span className="font-bold"> {selectedSize}</span>
                  </p>
                  <div className="flex items-center gap-2 h-12">
                    {product.sizes.map((size) => {
                      return (
                        <div key={size}>
                          <span
                            className="border p-2 w-8 h-8  flex items-center justify-center cursor-pointer hover:bg-zinc-100 "
                            onClick={() => handleSize(size)}
                          >
                            {size}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p>
                    Color: <span className="font-bold">{product.color}</span>
                  </p>

                  <div className="flex w-full items-center  gap-4">
                    <div className="bg-white flex items-center justify-between w-1/3">
                      <button className="text-2xl p-1  cursor-pointer">
                        <Minus />
                      </button>
                      <span className="text-xl">{product.quantity}</span>
                      <button
                        className="text-2xl p-1 cursor-pointer"
                        onClick={() => increaseQuantity(product)}
                      >
                        <Plus />
                      </button>
                    </div>
                    <button
                      className="w-full bg-zinc-900 p-4 text-zinc-50 cursor-pointer hover:bg-zinc-800"
                      onClick={() => addProductToCart(product,selectedSize)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        return null;
      })}
    </div>
  );
};
