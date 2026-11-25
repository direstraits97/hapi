const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name of game required."],
  },
  year: {
    type: Number,
    required: false,
  },
  played: {
    type: Boolean,
    required: [
      true,
      "played is required, please declare if the game has been played or not.",
    ],
  },
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
