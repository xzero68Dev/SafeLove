import type { NextApiRequest, NextApiResponse } from "next";
import { AFF } from "../../../data/affiliateLinks";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const key = Array.isArray(id) ? id[0] : id;
  const url = key ? AFF[key] : undefined;

  if (!url) {
    res.status(404).send("Affiliate link not found");
    return;
  }
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=86400");
  res.writeHead(302, { Location: url });
  res.end();
}
