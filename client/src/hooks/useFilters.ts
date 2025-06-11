import type { Product } from "../types/product.interface";

export const useFilters = () => {

  const filterProducts = (products: Product[],value:string) => {

    return  products.filter((product:Product) => {
      return product.name.toLowerCase().includes(value.toLowerCase());
    });

  };

  return { filterProducts};  
}