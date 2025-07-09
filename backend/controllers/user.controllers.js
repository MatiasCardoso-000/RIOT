import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: ["All fields are required"] });
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
    res.status(500).json({ message: ["Internal server error"] });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: ["All fields are required"] });
  }

  try {
    const userFound = await UserModel.findOne(email);

    if (!userFound) {
      return res.status(404).json({ message: ["User not found"] });
    }

    const isValidPassword = await bcrypt.compare(password, userFound.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: ["Invalid credentials"] });
    }

    const token = jwt.sign({ uid: userFound.uid }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.cookie("token", token, {
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production", // 🔧 AÑADIDO: Para HTTPS en producción
      maxAge: 24 * 60 * 60 * 1000, // 24 horas
    });

    const userResponse = {
      uid: userFound.uid,
      role_id: userFound.role_id,
      email: userFound.email,
      username: userFound.username,
    };

    return res.json({ user: userResponse});
  } catch (error) {
    console.error("Login error", error);
    res.status(500).json({ message: [error.message] });
  }
};


export const verifyToken = async (req, res) => {
  try {
    // El middleware validateToken ya verificó el token
    // req.user contiene la información decodificada
    
    const user = await UserModel.findById(req.user.uid);
    
    if (!user) {
      return res.status(404).json({ message: ["User not found"] });
    }
    
    // Devolver información del usuario sin datos sensibles
    const userResponse = {
      uid: user.uid,
      email: user.email,
      name: user.name,
    };
    
    res.json(userResponse);
  } catch (error) {
    console.error("Verify token error:", error);
    res.status(500).json({ message: ["Server error"] });
  }
};

export const UserController = {
  register,
  login,
  verifyToken
};
