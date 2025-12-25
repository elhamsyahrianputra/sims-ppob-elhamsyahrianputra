import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email tidak boleh kosong")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(1, "Password tidak boleh kosong")
    .min(8, "Password minimal 8 karakter"),
});

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email tidak boleh kosong")
      .email("Format email tidak valid"),
    first_name: z
      .string()
      .min(1, "Nama depan tidak boleh kosong")
      .max(50, "Nama depan maksimal 50 karakter"),
    last_name: z
      .string()
      .min(1, "Nama belakang tidak boleh kosong")
      .max(50, "Nama belakang maksimal 50 karakter"),
    password: z
      .string()
      .min(1, "Password tidak boleh kosong")
      .min(8, "Password minimal 8 karakter")
      .max(100, "Password maksimal 100 karakter"),
    confirm_password: z
      .string()
      .min(1, "Konfirmasi password tidak boleh kosong"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password dan konfirmasi password tidak sama",
    path: ["confirm_password"],
  });

export type LoginRequest = z.infer<typeof loginSchema>;
export type RegisterRequest = z.infer<typeof registerSchema>;
