import { z } from "zod";

export const paymentSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is required"),
  amount: z.coerce.number().min(1, "Amount is required"),
});

export type TpaymentSchema = z.infer<typeof paymentSchema>;

export interface paystackPaymentProps {
  name: string;
  amount: number;
  email: string;
  message: string;
  metadata: {
    name: string;
    email: string;
    message: string;
  };
  publicKey: string;
  text: string;
  onSuccess: () => void;
  onClose: () => void;
}
