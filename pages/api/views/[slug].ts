import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  res.status(200).json({ total: Math.round(Math.random() * 10000) });
}
