import { ProductModel } from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { name, description, price, image, stock,sizes,  category } = req.body;

  if (!name || !description || !price || !image || !stock || !sizes || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newProduct = await ProductModel.create({
      name,
      description,
      price,
      sizes,
      image,
      stock,
      category,
    });
 

  res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image, stock, category } = req.body;

  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    } } catch (error) {
    console.error("Error fetching product for update:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  try {
    const updatedProduct = await ProductModel.update(id, {
      name,
      description,
      price,
      image,
      stock,
      category,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product for deletion:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  try {
    await ProductModel.deleteById(id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
