"use strict";

const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
require("dotenv").config();

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((error) => {
      console.error("Error connecting to database: " + error);
    });

  server.route([
    {
      method: "GET",
      path: "/games",
      handler: async (request, h) => {
        try {
          return await Game.find();
        } catch (error) {
          return h.response("There was an error: " + error).code(500);
        }
      },
    },
    {
      method: "POST",
      path: "/games",
      handler: async (request, h) => {
        try {
          const game = new Game(request.payload);
          return await game.save();
        } catch (error) {
          return h.response("There was an error: " + error).code(500);
        }
      },
    },
  ]);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
