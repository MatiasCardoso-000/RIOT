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
      name: "Remera Over Size Blanca",
      price: 15000,
      image: "../../../public/IMG-20250609-WA0001.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Blanco",
      quantity: 0,
    },
    {
      id: 2,
      name: "Remera OverSize Unisex Negro",
      price: 15000,
      image: "../../../public/IMG-20250609-WA0002.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      quantity: 0,
    },
    {
      id: 3,
      name: "Remera Over Size Marrón",
      price: 15000,
      image: "../../../public/IMG-20250609-WA0003.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Marrón",
      quantity: 0,
    },
    {
      id: 4,
      name: "Remera OverSize Unisex Gris",
      price: 15000,
      image: "../../../public/IMG-20250609-WA0004.jpg",
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
      image: "../../../public/remeras_basicas.jpg",
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Rosado",
      quantity: 0,
    },
    {
      id: 6,
      name: "Remera Básica Marrón Claro",
      price: 12000,
      image: "../../../public/remeras_basicas_beige.jpg",
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Marrón Claro",
      quantity: 0,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
