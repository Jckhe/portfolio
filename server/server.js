const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../build')));


// app.use('/.well-known/pki-validation/7318326D7CF54A243A669468BDE3E2BC.txt', (req, res) => {
//   res.sendFile(path.join(__dirname, '../7318326D7CF54A243A669468BDE3E2BC.txt'));
// })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});



module.exports = app;


