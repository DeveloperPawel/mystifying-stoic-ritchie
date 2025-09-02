import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("calling map func");
  console.log(process.env.MAP_BOX);
  res.status(203).json({ map: process.env.MAP_BOX });
}
