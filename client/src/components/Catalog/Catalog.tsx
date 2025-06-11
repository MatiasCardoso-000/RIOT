import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../ProductCard/ProductCard";

export const Catalog = () => {
  const { products } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-zinc-800 mb-8">Catálogo de Remeras</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};