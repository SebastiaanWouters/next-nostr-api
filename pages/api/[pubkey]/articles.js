// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool, relays } from '../../../utils/relay.js'
import { Author, Event, RelayPool } from 'nostr-relaypool-fork'

export default function handler(req, res) {
  const { pubkey } = req.query;
  let unsub = pool.subscribe(
    [
      {
        kinds: [0],
        authors: [
          pubkey,
        ],
      },
    ],
    relays,
    (event, isAfterEose, relayURL) => {
      console.log(event, isAfterEose, relayURL);
    },
    undefined,
    (events, relayURL) => {
      processEvents(events);
    }
  );

  function processEvents(events) {
    res.status(200).json(events)
  }

  
}
