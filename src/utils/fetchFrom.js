import randomDelay from "./randomDelay";

import rooms from "../db/rooms.json";
import bookings from "../db/bookings.json";
import users from "../db/users.json";
import contact from "../db/contact.json";

const fetchFrom = (db) => {
  switch (db) {
    case "rooms":
      return randomDelay(rooms);
    case "bookings":
      return randomDelay(bookings);
    case "users":
      return randomDelay(users);
    case "contact":
      return randomDelay(contact);
    default:
      return;
  }
};
export default fetchFrom;
