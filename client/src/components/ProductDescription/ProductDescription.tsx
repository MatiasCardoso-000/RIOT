import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect } from "react";

export const ProductDescription = () => {
  const { id } = useParams();
  const { products } = useProducts();

  useEffect(()=> {
    if (!id) {
      console.error("Product ID is not defined");
    } else {
      console.log("Fetching product with ID:", id);
    }
  }, [id]);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {(() => {
        const product = products?.find((product) => product.id === Number(id));
        return product ? <ProductCard key={product.id} product={product} /> : null;
      })()}
    </div>
  );
};
