const express = require('express');
const app = express();
const PORT = 5006;

app.get('/', (req, res) => {
  res.send('title service is up!');
});

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
})