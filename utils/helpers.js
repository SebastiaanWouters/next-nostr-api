import { pool, relays } from './relay.js'
import { Author, Event, RelayPool } from 'nostr-relaypool-fork'

export async function getEvents(kind = 1, pubkeys = null, since = 0, limit = 10000, callback, delay = 4000) {
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

  setTimeout(() => { if (!finished) {unsub(); finished = true; callback(allEvents)}}, delay);

}

export async function getReactionsOnEvent(id, callback, delay = 2000) {
  let reactions = [];
  let reactionCount = 0;
  let count = 0;
  let finished = false;
  let unsub = pool.subscribe(
    [
      {
        kinds: [7,1],
        "#e": [id],
      },
    ],
    relays,
    (event, isAfterEose, relayURL) => {
      console.log(event, isAfterEose, relayURL);
      reactions.push(event);
      reactionCount += 1;

    },
    undefined,
    (events, relayURL) => {
      processReactions();
    }
  );

  function processReactions() {
    count += 1;
    if (count >= relays.length) {
      if (!finished) {
        unsub();
        finished = true;
        callback(reactionCount);
      }
      
    }
  }

  setTimeout(() => { if (!finished) {unsub(); finished = true; callback(reactionCount)}}, delay);

}

export async function getReactionsOnPubkey(pubkey, callback, delay = 2000) {
  let reactions = [];
  let reactionCount = 0;
  let count = 0;
  let finished = false;
  let unsub = pool.subscribe(
    [
      {
        kinds: [7,1],
        "#p": [pubkey],
      },
    ],
    relays,
    (event, isAfterEose, relayURL) => {
      console.log(event, isAfterEose, relayURL);
      reactions.push(event);
      reactionCount += 1;

    },
    undefined,
    (events, relayURL) => {
      processReactions();
    }
  );

  function processReactions() {
    count += 1;
    if (count >= relays.length) {
      if (!finished) {
        unsub();
        finished = true;
        callback(reactionCount);
      }
      
    }
  }

  setTimeout(() => { if (!finished) {unsub(); finished = true; callback(reactionCount)}}, delay);

}

export async function getFollowing(pubkey, callback) {
  const author = new Author(pool, relays, pubkey);
  author.followsPubkeys(processFollow, 0);

  function processFollow(pubkeys) {
    callback(pubkeys);
  }

}