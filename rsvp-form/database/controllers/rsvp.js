const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (f, l, e, g) => {
  Rsvp.collection.insertOne(
    {firstName: f, lastName: l, email: e, guests: g}
  )
};
module.exports = findRsvpAndUpdate;
