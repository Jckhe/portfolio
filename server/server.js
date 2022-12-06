const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3000;





app.use('/', express.static(path.join(__dirname, '../build')));



// app.use('/.well-known/pki-validation/7318326D7CF54A243A669468BDE3E2BC.txt', (req, res) => {
//   res.sendFile(path.join(__dirname, '../7318326D7CF54A243A669468BDE3E2BC.txt'));
// })


// const httpServer = http.createServer(app);
// const httpsServer = https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.csr'),
// }, app);



// httpServer.listen(80, () => {
//   console.log('HTTP Server running on port 80');
// });

// httpsServer.listen(443, () => {
//   console.log('HTTPS Server running on port 443');
// });

app.listen(PORT, () => {
  console.log("LISTENING ON PORT: ", PORT)
})

module.exports = app;


