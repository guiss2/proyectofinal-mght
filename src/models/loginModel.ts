import { z } from 'zod';

export const shemaLogin = z.object({
  username: z.string().min(3, 'El nombre de usuario es requerido').max(100),
  password: z.string().min(6, 'La contraseña es requerida').max(100),
});
export type LoginFormValues= z.infer<typeof shemaLogin>;