import { z } from "zod";

export const createCita = z.object({
  cedulaPaciente: z.number({
    required_error: "cedula de paciente es requerida",
  }),
  motivo: z
    .string({
      required_error: "motivo debe ser un string",
    })
    .optional(),
  doctor: z.string({
    required_error: "Doctor es requerido",
  }),
});
