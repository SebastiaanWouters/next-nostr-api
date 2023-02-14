// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool, relays } from '../../../utils/relay.js'
import { Author, Event, RelayPool } from 'nostr-relaypool-fork'


export default function handler(req, res) {
  const { pubkey } = req.query;
  const author = new Author(pool, relays, pubkey);
  author.followsPubkeys(processFollow, 0);

  function processFollow(pubkeys) {
    res.status(200).json(pubkeys)
  }

  
}
