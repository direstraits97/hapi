const Game = require("../models/game.model");

exports.getAllGames = async (request, h) => {
  try {
    return await Game.find();
  } catch (error) {
    return h.response("There was an error: " + error).code(500);
  }
};

exports.addGame = async (request, h) => {
  try {
    const game = new Game(request.payload);
    return await game.save();
  } catch (error) {
    return h.response("There was an error: " + error).code(500);
  }
};
