const dotenv = require('dotenv');
dotenv.config();


const config = {
  app: {
    port: 5006
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'airbnb-title'
  }
}

module.exports.config = config;