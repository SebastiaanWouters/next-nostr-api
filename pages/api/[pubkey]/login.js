// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool, relays } from '../../../utils/relay.js'
import { Author, Event, RelayPool } from 'nostr-relaypool-fork'

export default function handler(req, res) {
  const { pubkey } = req.query;
  const author = new Author(pool, relays, pubkey);
  author.metaData((event, afterEose, relays) => setupUser(event), 0);

  function setupUser(event) {
    const data = JSON.parse(event.content);
    const response = {...data, "pubkey": event.pubkey};
    res.status(200).json(event)
  }
  
}
