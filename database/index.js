const mongoose = require('mongoose');
const { TitleSchema } = require('./TitleSchema.js');
const { config } = require('../config.js');

const { db: {
  host,
  port,
  name
} } = config;

mongoose.connect(`mongodb://${host}:${port}/${name}`);

