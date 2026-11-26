/* Denna fil skapar ett schema kring hur sparade objekt ska se ut, vilken typ av data varje property förväntas vara
 och om de måste fyllas i eller ej. Vid felaktig inmatning följer felmeddelanden med som svar. Detta schema används sedan
 för att skapa en samling med data. 
 Av: Josefine Backlund */

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
