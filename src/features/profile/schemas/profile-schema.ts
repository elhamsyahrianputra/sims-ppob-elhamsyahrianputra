import { z } from "zod";

export const updateProfileSchema = z.object({
  first_name: z.string().min(1, "Nama depan tidak boleh kosong"),
  last_name: z.string().min(1, "Nama belakang tidak boleh kosong"),
});

export type UpdateProfileRequest = z.infer<typeof updateProfileSchema>;
