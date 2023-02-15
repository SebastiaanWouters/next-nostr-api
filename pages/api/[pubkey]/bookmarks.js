// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { pubkey } = req.query;
  const bookmarks = await prisma.bookmark.findMany({
    where: {
      owner: pubkey,
    }});
  res.status(200).json(bookmarks);
}
