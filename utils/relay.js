import {RelayPool} from "nostr-relaypool-fork";

export const relays = [
  "wss://relay.snort.social",
  "wss://nostr-pub.wellorder.net",
  "wss:relay.damus.io"
];

export const pool = new RelayPool(relays);