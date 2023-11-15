// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import 'jwt' from 'jsonwebtoken';
const SECRET = "s3cret";

type Data = {
  token: string; // we need
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const { username, password } = req.body;
  // const user = await Buyer.findOne({ username });
  // if (user) {
  //     res.status(403).json({ message: 'User already exists' });
  // }
  // else {
  //     const newBuyer = new Buyer({ username, password });
  //     await newBuyer.save();
  //     const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
  //     res.json({ message: 'User created successfully', token });
  // }
  res.status(200).json({ token: 'Random String', message: "success" })
}
