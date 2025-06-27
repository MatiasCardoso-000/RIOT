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
      modelImage: [
        "../../../public/IMG-20250615-WA0006.jpg",
        "../../../public/IMG-20250615-WA0007.jpg",
        "../../../public/IMG-20250615-WA0008.jpg",
      ],
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
      modelImage: ["../../../public/IMG-20250615-WA0006.jpg"],
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
      modelImage: ["../../../public/IMG-20250615-WA0008.jpg"],
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
      modelImage: ["../../../public/IMG-20250615-WA0006.jpg"],
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
      modelImage: ["../../../public/IMG-20250615-WA0006.jpg"],
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
      modelImage: ["../../../public/IMG-20250615-WA0006.jpg"],
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Básica",
      sizes: ["S", "M", "L", "XL"],
      color: "Marrón Claro",
      quantity: 0,
    },
  ]);

  const nextProductdImage = (product: Product, imageIndex: number) => {
    const productExists = products.findIndex((p) => p.id === product.id);

    if (!productExists) {
      console.log(imageIndex++);
    }
    // setProducts((prevProducts) =>
    //   prevProducts.map((p) =>
    //     p.id === product.id
    //       ? { ...p, modelImage: [p.modelImage[imageIndex++]] }
    //       : p
    //   )
    // );
  };

  return (
    <ProductsContext.Provider value={{ products, nextProductdImage }}>
      {children}
    </ProductsContext.Provider>
  );
};
