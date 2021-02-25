const mongoose = require('mongoose');
const { TitleSchema } = require('./schema.js');
const { config } = require('../config.js');

const { db: {
  host,
  port,
  name
} } = config;

mongoose.connect(`mongodb://${host}:${port}/${name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Title = mongoose.model('Title', TitleSchema);

const getTitleByRoomId = (roomId) => {
  return new Promise((resolve, reject) => {
    Title.find({roomId})
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      reject(err);
    });
  })

}

module.exports.getTitleByRoomId = getTitleByRoomId;
