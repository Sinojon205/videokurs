const express = require('express');
const app = express();
const hostName = '127.0.0.1';
const port = 8800;
app.use(express.static('ui'));
app.use('/assets', express.static('assets'));
app.listen(port, hostName, () => {
  console.log(`server running at http://${hostName}:${port}/`);
});


