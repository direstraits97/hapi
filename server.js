/* Denna fil skapar en server med Hapi.js som kopplas upp till en databas med Mongoose. Alla ändpunkter för API:et
hämtas in med hjälp av routing under mappen "routes".
Av: Josefine Backlund */

"use strict";

//Nödvändiga paket.
const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
require("dotenv").config(); //Hantera env-variabel.

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });
  //Uppkoppling mot Mongoose.
  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((error) => {
      console.error("Error connecting to database: " + error);
    });

  require("./routes/game.route")(server); //Ändpunkter i API:et.

  await server.start();
  console.log("Server running on %s", server.info.uri); //Länk till server.
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
