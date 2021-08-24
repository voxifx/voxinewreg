const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildId: String,
  userId: String,
  tag: String
});

module.exports = mongoose.model("Tag", tagSchema);