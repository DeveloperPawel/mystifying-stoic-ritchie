import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ login: process.env.LOGIN, key: process.env.KEY });
}

// export async function GET(request: any) {
//   const res = {
// login: process.env.LOGIN,
// key: process.env.KEY,
//   };

//   return await new Response(JSON.stringify(res));
// }
