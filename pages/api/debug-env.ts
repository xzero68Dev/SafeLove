import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    SITE_URL: process.env.SITE_URL || null,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || null,
    hasGA: Boolean(process.env.NEXT_PUBLIC_GA_ID),
  });
}
