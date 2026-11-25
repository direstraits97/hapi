const Game = require("../models/game.model");

gameController = require("../controllers/game.controller");

module.exports = (server) => {
  server.route([
    {
      method: "GET",
      path: "/games",
      handler: gameController.getAllGames,
    },
    {
      method: "POST",
      path: "/games",
      handler: gameController.addGame,
    },
  ]);
};
