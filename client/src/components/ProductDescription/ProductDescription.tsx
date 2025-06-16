import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductDescription = () => {
  const { products } = useProducts();
  const { name } = useParams<{ name?: string }>();
  const searchName = name ?? "";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {products.map((product) => {
        if (product.name.includes(searchName))
          return <ProductCard key={product.id} product={product} />;
        return null;
      })}
    </div>
  );
};
