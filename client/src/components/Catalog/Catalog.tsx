import { useProducts } from "../../hooks/useProducts";
import { useFilters } from "../../hooks/useFilters";
import { ProductCard } from "../ProductCard/ProductCard";
import type { Product } from "../../types/product.interface";
import { useSearch } from "../../hooks/useSearch";

export const Catalog = () => {
  const { products } = useProducts();
  const { filterProducts } = useFilters();
  const { searchQuery } = useSearch()
  const filteredProducts = filterProducts(products,searchQuery);
    

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-zinc-800 mb-8">Catálogo de Remeras</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};