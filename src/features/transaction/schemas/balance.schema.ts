import z from "zod";

export const topUpSchema = z.object({
  top_up_amount: z.coerce
    .number()
    .refine((val) => !Number.isNaN(val) && val > 0, {
      message: "Nominal top up harus diisi",
    })
    .min(10000, "Nominal top up minimal Rp 10.000")
    .max(1000000, "Nominal top up maksimal Rp 1.000.000"),
});

export type TopUpRequest = z.infer<typeof topUpSchema>;
