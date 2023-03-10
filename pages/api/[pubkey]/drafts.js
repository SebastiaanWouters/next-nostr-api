// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { pubkey } = req.query;
  const drafts = await prisma.draft.findMany({
    where: {
      author: pubkey,
    }});
  res.status(200).json(drafts);
}
