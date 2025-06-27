import { createContext } from "react";
import type { Product } from "../../types/product.interface";

interface ProductsContextType {
  // Define the properties and methods that will be available in the context
  products: Product[]; // Replace 'any' with your product type
  nextProductdImage: (product:Product,imageIndex: number) => void;

  setProducts?: (products: Product[]) => void; // Function to set products
}
export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  nextProductdImage: (product) => product,

  setProducts: () => {},
});