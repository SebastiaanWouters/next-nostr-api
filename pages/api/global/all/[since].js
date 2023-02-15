// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getEvents } from '../../../../utils/helpers.js';


export default async function handler(req, res) {
  const { since } = req.query;
  await getEvents(undefined, undefined, parseInt(since), undefined, (events) => { res.status(200).json(events); }, 4000);
  
}
