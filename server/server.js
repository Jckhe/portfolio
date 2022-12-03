const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '../build')));




app.listen(3000, () => {
  console.log(`Server listening on port: ${PORT}...`);
});



module.exports = app;


