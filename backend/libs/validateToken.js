import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: ["No token provided"] });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: ["Invalid token"] });
    }
    req.user = decoded;
    next();
  });
};
