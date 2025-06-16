import { Router } from "express";
import { UserController } from "../controllers/user.controllers.js";
import { validateSchema } from "../libs/validateSchema.js";
import { loginSchema, registerSchema } from "../schemas/auth.schemas.js";

export const router = Router();

router.post('/register', validateSchema(registerSchema),UserController.register);
router.post('/login',validateSchema(loginSchema), UserController.login);
router.get('/users/:uid', UserController.getUserById);
// router.put('/users/:id', UserController.updateUser);
router.delete('/users/:uid', UserController.deleteUser);
