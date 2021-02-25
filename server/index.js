const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { getTitleByRoomId } = require('../database/index.js');
const PORT = 5006;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/rooms/:id/title', async (req, res) => {
  try {
    let title = await getTitleByRoomId(req.params.id);
    res.status(200).send(title);
  } catch(e) {
    res.status(500).send(e)
  }
});

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
})