// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool, relays } from '../../../utils/relay.js'
import { Author, Event, RelayPool } from 'nostr-relaypool-fork'


export default function handler(req, res) {
  const { id } = req.query;

  const getEvent = async (id, relays) => {
    try {
        const event = await pool.getEventById(id, relays);
        res.status(200).json(event);
    }
    catch (err) {
      res.status(400).json(err);
    }
  }
  getEvent(id, relays);


}
