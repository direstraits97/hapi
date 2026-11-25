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
      method: "GET",
      path: "/games/{id}",
      handler: gameController.getGame,
    },
    {
      method: "POST",
      path: "/games",
      handler: gameController.addGame,
    },
  ]);
};
