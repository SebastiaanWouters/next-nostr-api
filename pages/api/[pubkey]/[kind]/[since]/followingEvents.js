// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getEvents, getFollowing } from '../../../../../utils/helpers.js';


export default async function handler(req, res) {
  const { pubkey, since, kind } = req.query;
  await getFollowing(pubkey, (pubkeys) => { getFollowingEvents(pubkeys)})

  async function getFollowingEvents(pubkeys) {
    await getEvents(parseInt(kind), pubkeys, parseInt(since), undefined, (events) => { res.status(200).json(events); }, 1500);
  }
  
  
}
