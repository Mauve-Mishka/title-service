const mongoose = require('mongoose');

const TitleSchema = mongoose.Schema({
  roomId: String,
  titleName: String,
  isSaved: Boolean,
  location: String,
  reviewScore: Number
});

module.exports.TitleSchema = TitleSchema;