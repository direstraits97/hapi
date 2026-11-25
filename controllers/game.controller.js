const Game = require("../models/game.model");

exports.getAllGames = async (request, h) => {
  try {
    return await Game.find();
  } catch (error) {
    return h.response("There was an error: " + error).code(500);
  }
};

exports.getGame = async (request, h) => {
  try {
    const gameId = request.params.id;
    return await Game.findById(gameId);
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

exports.deleteGame = async (request, h) => {
  try {
    const gameId = request.params.id;
    await Game.findByIdAndDelete(gameId);
    return await Game.find();
  } catch (error) {
    return h.resonse("There was an error: " + error).code(500);
  }
};
