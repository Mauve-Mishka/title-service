const mongoose = require('mongoose');
const { TitleSchema } = require('./schema.js');
const { config } = require('../config.js');
const faker = require('faker');

const { db: {
  host,
  port,
  name
} } = config;

mongoose.connect(`mongodb://${host}:${port}/${name}`);

const Title = mongoose.model('Title', TitleSchema);

Title.deleteMany({})
.then(() => {
  console.log('deleted all titles...');
  seed();
});

const seed = () => {
  for (let i = 100; i < 200; i++) {
    let roomId = i;
    let titleName = faker.commerce.productName();
    let isSaved = i % 2 === 0 ? true : false;
    let location = faker.address.streetAddress();
    let reviewScore = getRandomInt(5);

    let newTitle = new Title({
      roomId,
      titleName,
      isSaved,
      location,
      reviewScore
    });
    newTitle.save()
    .then(() => {
      console.log('Title saved in db for roomId: ', i);
    });
  }
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}




