import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  try {
    const token = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error("Token validation error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
