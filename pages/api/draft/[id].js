// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../../utils/client";

export default async function handler(req, res) {
  const { id } = req.query;
  const draft = await prisma.draft.findUnique({
    where: {
      id: parseInt(id),
    }});
  res.status(200).json(draft);
}
