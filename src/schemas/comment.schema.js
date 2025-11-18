import z from "zod";

export const commentSchema = z.object({
  content: z
    .string({
      required_error: "El contenido de tu comentario es obligatorio",
    })
    .min(10, { message: "Debe tener al menos 10 caracteres" })
    .max(10000, { message: "No debe superar los 2000 caracteres" })
    .regex(/^\s*\d*\.*\s*[¿A-ZÑÁÉÍÓÚ].*$/gs, {
      message: "El contenido de tu comentario debe comenzar con mayúscula",
    }),
  enabled: z
    .boolean({
      invalid_type_error: "El campo habilitado debe ser verdadero o falso",
    })
    .optional()
    .default(true),
});
