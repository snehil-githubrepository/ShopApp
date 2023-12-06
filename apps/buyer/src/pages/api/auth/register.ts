// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "db";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "@/lib/dbConnect";
const SECRET = "s3CRET";

type Data = {
  token?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await ensureDbConnected();
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      return res.status(403).json({ message: "User already exists" });
    }

    const obj = { username: username, password: password };
    const newUser = new User(obj);
    await newUser.save();

    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error creating admin" });
  }
}
