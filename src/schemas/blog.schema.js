import z from "zod";

export const blogSchema = z.object({
  title: z
    .string({
      required_error: "El nombre es obligatorio",
    })
    .min(5, { message: "Debe tener al menos 5 caracteres" })
    .max(80, { message: "No debe superar los 80 caracteres" })
    .regex(/^[A-ZÑÁÉÍÓÚ]+.*$/, {
      message: "El Título debe comenzar con mayúscula",
    }),
  content: z
    .string({
      required_error: "El nombre es obligatorio",
    })
    .min(10, { message: "Debe tener al menos 10 caracteres" })
    .max(10000, { message: "No debe superar los 2000 caracteres" })
    .regex(/^\s*\d*\.*\s*[¿A-ZÑÁÉÍÓÚ].*$/gs, {
      message: "El contenido de tu blog debe comenzar con mayúscula",
    }),
  enabled: z
    .boolean({
      invalid_type_error: "El campo habilitado debe ser verdadero o falso",
    })
    .optional()
    .default(true),
});
