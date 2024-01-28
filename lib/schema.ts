import { z } from "zod";
import isMobilePhone from "validator/lib/isMobilePhone";

export const FormDataSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  tel: z
    .string()
    .refine((str) => isMobilePhone(str.replaceAll("-", ""), "ms-MY"), {
      message: "Invalid Phone Number",
    }),
});
