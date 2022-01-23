const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/controllers/rsvp.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/rsvps', (req, res) => {
  db.findRsvpAndUpdate(req.firstName, req.lastName, req.email, req.guestCount)
  .then((response) => {
    res.send("Reservation was successful with a response of: " + response)
  })
  .catch((error) => {
    res.status(404).send(error)
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
