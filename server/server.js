const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../build')));




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});



module.exports = app;


