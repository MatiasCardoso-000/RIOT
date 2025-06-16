import { db } from "../database/database.js";

const create = async ({ name, description, price, image, stock, category }) => {
  const query = {
    text: `
      INSERT INTO PRODUCTS (NAME, DESCRIPTION, PRICE, IMAGE, STOCK,  CATEGORY)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING NAME, DESCRIPTION, PRICE, IMAGE, STOCK, CATEGORY, PID
    `,
    values: [name, description, price, image, stock, category],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

const findAll = async () => {
  const query = {
    text: `
      SELECT NAME, DESCRIPTION, PRICE, IMAGE, STOCK, CATEGORY, PID
      FROM PRODUCTS
    `,
  };
  const { rows } = await db.query(query);
  return rows;
};

const findById = async (id) => {
  const query = {
    text: `
      SELECT NAME, DESCRIPTION, PRICE, IMAGE, STOCK, CATEGORY, PID
      FROM PRODUCTS
      WHERE PID = $1
    `,
    values: [id],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

const update = async (
  id,
  { name, description, price, image, stock, category }
) => {
  const query = {
    text: `
      UPDATE PRODUCTS
      SET NAME = $1, DESCRIPTION = $2, PRICE = $3, IMAGE = $4, STOCK = $5, CATEGORY = $6
      WHERE PID = $7
      RETURNING NAME, DESCRIPTION, PRICE, IMAGE, STOCK, CATEGORY, PID
    `,
    values: [name, description, price, image, stock, category, id],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

const deleteById = async (id) => {
  const query = {
    text: `
      DELETE FROM PRODUCTS
      WHERE PID = $1
    `,
    values: [id],
  };
  await db.query(query);
  return { message: "Product deleted successfully" };
};

export const ProductModel = {
  create,
  findAll,
  findById,
  update,
  deleteById,
};
