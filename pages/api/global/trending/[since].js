// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool, relays } from '../../../../utils/relay.js';
import { Author, Event } from 'nostr-relaypool-fork';
import { getEvents, getReactions, getReactionsOnEvent } from '../../../../utils/helpers.js';


export default async function handler(req, res) {
  const { since } = req.query;
  await getEvents(1, undefined, parseInt(since), undefined, (received) => { getTrending(received) }, 7000);
  
  async function getTrending(events) {
    let trending = [];
    let processed = 0

    for (const event of events) {
      await getReactionsOnEvent(event.id, (reactionCount) => { if (reactionCount >= 10) { trending.push(event) }; processed += 1; if (processed >= events.length) { res.status(200).json(trending); } }, 2000)
    }

    
  }
  
}
