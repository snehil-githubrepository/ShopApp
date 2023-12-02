// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "db";
import jwt from "jsonwebtoken";
import ensureDbConnect from "@/lib/dbConnect";
const SECRET = "s3CRET";

type Data = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensureDbConnect();
  const { email, password } = req.body;
  let username = email;
  //   console.log(username);
  //   console.log(password);
  let user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const obj = { username: username, password: password };
    const newUser = new User(obj);
    newUser.save();

    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Admin created successfully", token });
  }
}
