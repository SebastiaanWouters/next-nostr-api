// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool, relays } from '../../../utils/relay.js'
import { Author, Event, RelayPool } from 'nostr-relaypool-fork'

export default function handler(req, res) {
  const { since } = req.query;
  let unsub = pool.subscribe(
    [
      {
        kinds: [1],
        since: parseInt(since);
        limit: 100;
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
