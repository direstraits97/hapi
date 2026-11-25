const Game = require("../models/game.model");

exports.getAllGames = async (request, h) => {
  try {
    return await Game.find();
  } catch (error) {
    return h
      .response("Could not get games, try again later...: " + error)
      .code(500);
  }
};

exports.getGame = async (request, h) => {
  try {
    const gameId = request.params.id;
    return await Game.findById(gameId);
  } catch (error) {
    return h.response("The id is not valid: " + error).code(404);
  }
};

exports.addGame = async (request, h) => {
  try {
    const game = new Game(request.payload);
    return await game.save();
  } catch (error) {
    return h
      .response("name and played are required values: " + error)
      .code(400);
  }
};

exports.updateGame = async (request, h) => {
  try {
    const gameId = request.params.id;
    await Game.findByIdAndUpdate(gameId, request.payload);
    return h.response("The game was updated successfully.");
  } catch (error) {
    return h
      .response("name and played are required values: " + error)
      .code(400);
  }
};

exports.deleteGame = async (request, h) => {
  try {
    const gameId = request.params.id;
    await Game.findByIdAndDelete(gameId);
    return h.response("The game was deleted successfully.");
  } catch (error) {
    return h
      .response("Could not delete object, try again later...: " + error)
      .code(500);
  }
};
