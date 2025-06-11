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
      image:
        "../../../public/IMG-20250609-WA0001.jpg",
      description:
        "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Negro", "Blanco", "Gris"],
    },
    {
      id: 2,
      name: "Remera Over Size Negra",
      price: 15000,
      image:
        "../../../public/IMG-20250609-WA0002.jpg",
      description:
        "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Azul", "Negro", "Gris"],
    },
    {
      id: 3,
      name: "Remera Over Size Marrón",
      price: 15000,
      image:
        "../../../public/IMG-20250609-WA0003.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Negro", "Blanco"],
    },
    {
      id: 4,
      name: "Remera Over Size Gris",
      price: 15000,
      image:
        "../../../public/IMG-20250609-WA0004.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Azul Marino", "Blanco", "Gris"],
    },
    {
      id: 5,
      name: "Remera Básica Rosada",
      price: 12000,
      image: "../../../public/remeras_basicas.jpg",
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Negro", "Blanco", "Gris Oscuro"],
    },
    {
      id: 6,
      name: "Remera Básica Marrón Claro",
      price: 12000,
      image:
        "../../../public/remeras_basicas_beige.jpg",
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gris", "Azul", "Verde"],
    }
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
  );
};
