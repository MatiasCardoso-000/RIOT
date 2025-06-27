import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

export const ProductDescription = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { products, nextProductdImage } = useProducts();
  const { name } = useParams<{ name?: string }>();
  const searchName = name ?? "";

  const handleSize = (size: any) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex items-center  w-full   px-4 sm:px-6 lg:px-8 py-8">
      {products.map((product) => {
        if (product.name.includes(searchName))
          return (
            <div className="flex flex-col gap-8">
              <div
                className="flex flex-col md:flex-row items-center mx-auto gap-4 justify-around"
                key={product.id}
              >
                <div className="w-full flex flex-col gap-8 ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-3/4 md:h-[600px] object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 ">
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
                      <button className="text-2xl p-1 cursor-pointer">
                        <Plus />
                      </button>
                    </div>
                    <button className="w-full bg-zinc-950 p-4 text-zinc-50 cursor-pointer hover:bg-zinc-800">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-center gap-8 ">
                {product.modelImage.map((p) => (
                  <img
                    src={p}
                    alt={product.name}
                    className="w-1/4  object-cover"
                  />
                ))}
              </div>
            </div>
          );
        return null;
      })}
    </div>
  );
};
