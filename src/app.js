const express = require('express');

const db = require("./db/connection");

const guestRoutes = require('./routes/guest');
const roomRoutes = require('./routes/room');
const reservationRoutes = require('./routes/reservation');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(guestRoutes);
app.use(roomRoutes);
app.use(reservationRoutes);

const port = 3000;



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
db.getInstance();