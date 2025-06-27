import { z } from "zod";
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]/;

export const registerSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters")
    .max(254, "Email must not exceed 254 characters") // RFC 5321 limit
    .toLowerCase()
    .trim()

    .refine(
      (email) => {
        // Validar caracteres permitidos adicionales
        const allowedChars = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return allowedChars.test(email);
      },
      {
        message: "Email contains invalid characters",
      }
    )
    .refine(
      (email) => {
        // Evitar múltiples puntos consecutivos
        return !email.includes("..");
      },
      {
        message: "Email format is invalid",
      }
    ),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters long")
    .max(128, "Password must not exceed 128 characters")
    .refine((password) => passwordRegex.test(password), {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&._-)",
    })
    .refine(
      (password) => {
        // Verificar que no contenga espacios
        return !/\s/.test(password);
      },
      {
        message: "Password cannot contain spaces",
      }
    ),
  username: z
    .string({ required_error: "Username is required" })
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username must not exceed 30 characters")
    .trim()
    .refine(
      (username) => {
        // Solo letras, números, guiones y guiones bajos
        const validChars = /^[a-zA-Z0-9_-]+$/;
        return validChars.test(username);
      },
      {
        message:
          "Username can only contain letters, numbers, hyphens, and underscores",
      }
    )
    .refine(
      (username) => {
        // No puede empezar o terminar con guión o guión bajo
        return !/^[-_]|[-_]$/.test(username);
      },
      {
        message: "Username cannot start or end with hyphens or underscores",
      }
    )
    .refine(
      (username) => {
        // No puede tener múltiples guiones o guiones bajos consecutivos
        return !/[-_]{2,}/.test(username);
      },
      {
        message: "Username cannot have consecutive hyphens or underscores",
      }
    )
    .refine(
      (username) => {
        // Lista de nombres de usuario reservados
        const reservedUsernames = [
          "admin",
          "root",
          "user",
          "test",
          "guest",
          "anonymous",
          "null",
          "undefined",
          "api",
          "www",
          "mail",
          "ftp",
          "support",
          "help",
          "info",
          "contact",
          "system",
        ];
        return !reservedUsernames.includes(username.toLowerCase());
      },
      {
        message: "This username is reserved and cannot be used",
      }
    ),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters")
    .max(254, "Email must not exceed 254 characters") // RFC 5321 limit
    .toLowerCase()
    .trim()
    .refine(
      (email) => {
        // Validar caracteres permitidos adicionales
        const allowedChars = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return allowedChars.test(email);
      },
      {
        message: "Email contains invalid characters",
      }
    )
    .refine(
      (email) => {
        // Evitar múltiples puntos consecutivos
        return !email.includes("..");
      },
      {
        message: "Email format is invalid",
      }
    ),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters long")
    .max(128, "Password must not exceed 128 characters")
    
    .refine(
      (password) => {
        // Verificar que no contenga espacios
        return !/\s/.test(password);
      },
      {
        message: "Password cannot contain spaces",
      }
    ),
});
