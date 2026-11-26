/* Denna fil anger vilken väg som krävs för att nå olika ändpunkter i API:et, vilken metod som kan köras där,
 och vilken funktion som ska användas från game.controller.js. 
 Av: Josefine Backlund */

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
    {
      method: "PUT",
      path: "/games/{id}",
      handler: gameController.updateGame,
    },
    {
      method: "DELETE",
      path: "/games/{id}",
      handler: gameController.deleteGame,
    },
  ]);
};
