import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ errors: ["All fields are required"] });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: user.uid }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({ user, token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ errors: ["Internal server error"] });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ errors: ["All fields are required"] });
  }
  
  try {
    const userFound = await UserModel.findOne(email);

    if (!userFound) {
      return res.status(404).json({ errors: ["User not found"] });
    }

    const isValidPassword = await bcrypt.compare( password,userFound.password);
    if (!isValidPassword) {
      return res.status(401).json({ errors: ["Invalid credentials"] });
    }

    const token = jwt.sign({ uid: userFound.uid }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ userFound, token });
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const getUserById = async (req, res) => {
  const { uid } = req.params;
  try {
    const user = await UserModel.findById(uid);
    if (!user) {
      return res.status(404).json({ errors: ["User not found"] });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ errors: ["Internal server error"] });
  }
};

const updateUser = async (req, res) => {
  const { uid } = req.params;
  try {
    const user = await UserModel.findById(uid);
    if (!user) {
      return res.status(404).json({ errors: ["User not found"] });
    }
    const { username, email, password } = req.body;
    const updatedUser = await UserModel.update(uid, {
      username,
      email,
      password,
    });
    if (!updatedUser) {
      return res.status(404).json({ errors: ["User not found"] });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ errors: ["Internal server error"] });
  }
};

const deleteUser = async (req, res) => {
  const { uid } = req.params;
  try {
    const result = await UserModel.deleteOne(uid);
    res.status(204).json(result);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ errors: ["Internal server error"] });
  }
};

export const UserController = {
  register,
  login,
  getUserById,
  updateUser,
  deleteUser,
};
