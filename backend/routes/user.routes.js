import { Router } from "express";
import { UserController } from "../controllers/user.controllers.js";
import { validateSchema } from "../libs/validateSchema.js";
import { loginSchema, registerSchema } from "../schemas/auth.schemas.js";
import { validateToken } from "../libs/validateToken.js";

export const router = Router();

router.post('/register', validateSchema(registerSchema),UserController.register);
router.post('/login',validateSchema(loginSchema), UserController.login);
router.get('/verify',validateToken, UserController.verifyToken);