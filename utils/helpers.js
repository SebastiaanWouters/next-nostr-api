import { pool, relays } from './relay.js'
import { Author, Event, RelayPool } from 'nostr-relaypool-fork'

export async function getEvents(kind = 0, pubkeys = null, since = 0, limit = 100, callback) {
  let allEvents = [];
  let count = 0;
  let finished = false;
  let unsub = pool.subscribe(
    [
      {
        kinds: [kind],
        authors: pubkeys ? pubkeys : null,
        since: since,
        limit: limit,
      },
    ],
    relays,
    (event, isAfterEose, relayURL) => {
      console.log(event, isAfterEose, relayURL);
      allEvents.push(event);
    },
    undefined,
    (events, relayURL) => {
      processEvents();
    }
  );

  function processEvents() {
    count += 1;
    if (count >= relays.length) {
      if (!finished) {
        unsub();
        finished = true;
        callback(allEvents);
      }
      
    }
  }

  setTimeout(() => { if (!finished) {unsub(); finished = true; callback(allEvents)}}, 2000);

}