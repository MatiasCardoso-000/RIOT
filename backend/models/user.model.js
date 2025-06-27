import { db } from "../database/database.js";

const create = async ({ username, email, password }) => {
  const query = {
    text: `
    INSERT INTO users ( email, password,username)
    VALUES ($1, $2, $3)
    RETURNING username,email,uid,role_id
  `,
    values: [ email, password,username],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

const find = async () => {
  const query = {
    text: `
    SELECT * FROM USERS
    `,
  };
  const { rows } = await db.query(query);
  return rows;
};

const findOne = async (email) => {
  const query = {
    text: `
      SELECT * FROM USERS 
      WHERE EMAIL = $1
    `,
    values: [email],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

const findById = async (uid) => {
  const query = {
    text: `
    SELECT * FROM USERS 
    WHERE UID = $1
    `,
    values: [uid],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

const update = async (id, { username, email, password }) => {
  try {
    const result = await db.query(
      "UPDATE users SET username = $1, email = $2, password = $3 WHERE uid = $4 RETURNING *",
      [username, email, password, id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const deleteOne = async (uid) => {
  const query = {
    text: `
    DELETE  FROM USERS
    WHERE UID = $1
    `,
    values: [uid],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

export const UserModel = {
  create,
  find,
  findOne,
  findById,
  update,
  deleteOne,
};
