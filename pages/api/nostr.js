// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool, relays } from '../../utils/relay.js'
import { Author, Event, RelayPool } from 'nostr-relaypool-fork'

export default function handler(req, res) {
  const author = new Author(pool, relays, "7bdef7861b9528d0ab246abc731d1d62b3781b28493c72eec848431ba2a1f6f4");
  author.metaData((event, afterEose, relays) => setupUser(event), 0);

  function setupUser(event) {
    res.status(200).json(event)
  }

  
}
