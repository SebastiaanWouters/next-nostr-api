import {RelayPool} from "nostr-relaypool-fork";

export const relays = [
  "wss://nostr-pub.wellorder.net",
];

export const pool = new RelayPool(relays);