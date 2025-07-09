import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  // console.log("Headers cookie:", req.headers.cookie);
  // console.log("Parsed cookies:", req.cookies);
  // console.log("Token from cookies:", req.cookies?.token);

  let token = req.cookies?.token;

  if (!token && req.headers.cookie) {
    const match = req.headers.cookie.match(/token=([^;]+)/);
    token = match ? match[1] : null;
  }

  if (!token && req.headers.authorization) {
    const authHeaders = req.headers.authorization;
    if (authHeaders.startWith("Bearer")) {
      token = authHeaders.substring(7);
    }
  }

  if (!token) {
    res.status(401).json({
      errors: ["No token provided"],
      error: "UNAUTHORIZED",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
};
