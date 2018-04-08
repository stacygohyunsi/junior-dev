const express = require('express');
const app = express();
const path = require('path');

app.use('/',express.static(path.join(__dirname, '/')));

app.listen(3500, () => {
	console.log('Listening on port 3500');
})