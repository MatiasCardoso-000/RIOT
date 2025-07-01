import { useState } from "react";
import { ProductsContext } from "./ProductsContext";
import type { Product } from "../../types/product.interface";

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Remera Oversize Blanca",
      price: 15000,
      image:"../../../public/productos/remeras/oversize/IMG-20250612-WA0006.jpg",
      
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Blanco",
      quantity: 0,
    },
    {
      id: 2,
      name: "Remera Oversize Negro",
      price: 15000,
      image: "../../../public/productos/remeras/oversize/IMG-20250612-WA0007.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      quantity: 0,
    },
    {
      id: 3,
      name: "Remera Oversize Marrón",
      price: 15000,
      image: "../../../public/productos/remeras/oversize/IMG-20250627-WA0003.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Marrón",
      quantity: 0,
    },
    {
      id: 4,
      name: "Remera Oversize Gris",
      price: 15000,
      image: "../../../public/productos/remeras/oversize/IMG-20250612-WA0005.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Gris",
      quantity: 0,
    },
    {
      id: 5,
      name: "Remera Básica Rosada",
      price: 12000,
      image: "../../../public/productos/remeras/basicas/IMG-20250612-WA0008.jpg",
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Rosado",
      quantity: 0,
    },
    {
      id: 6,
      name: "Remera Básica Marrón",
      price: 12000,
     image: "../../../public/productos/remeras/basicas/IMG-20250627-WA0012.jpg",
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Marrón",
      quantity: 0,
    },
  ]);


  const increaseQuantity = (product: Product) => {
    if (product.quantity >= 0) {
      return setProducts(
        products.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    }
    return product;
  }

  return (
    <ProductsContext.Provider value={{ products,setProducts,increaseQuantity  }}>
      {children}
    </ProductsContext.Provider>
  );
};
