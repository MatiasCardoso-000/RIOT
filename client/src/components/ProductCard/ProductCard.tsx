// import { Heart,  ShoppingCart} from "lucide-react";
import type { Product } from "../../types/product.interface";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product; 
}

export const ProductCard = ({product}: ProductCardProps) => {
  // const handleAddToCart = () => {
  //   addToCart(product, selectedSize, selectedColor);
  // };

  return (

    <div className="bg-zinc-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-88 object-cover"
        />
        {/* <button
          className={`absolute bg-white top-3 right-3 p-2 rounded-full transition-colors shadow-md cursor-pointer hover:bg-zinc-200`}
        >
          <Heart className="w-4 h-4"  />
        </button> */}
      </div>
      
      <div className="p-4">
        <Link to={`/product-description/${product.name}`} className="block mb-2">
          <h3 className="text-lg font-semibold text-zinc-800 mb-2">{product.name}</h3>
        </Link>
        <p className="text-zinc-600 text-sm mb-3">{product.description}</p>
       
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-zinc-800">
            ${product.price.toLocaleString()}
          </span>
          {/* <button
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </button> */}
        </div>
      </div>
    </div>
  );
};