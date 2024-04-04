import { z } from "zod";
import express from "express";
const app = express();

const profile = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Email cannot be empty" }),
  age: z.number().min(18, { message: "you must be 18" }).optional(),
});
type personType = z.infer<typeof profile>;
app.put("/user", (req, res) => {
  const result = profile.safeParse(req.body);
  const update: personType = req.body;
  if (!result.success) {
    res.status(400).send(result.error.message);
  } else {
    res.send("User created");
  }
});
