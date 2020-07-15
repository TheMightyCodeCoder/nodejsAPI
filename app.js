const express = require('express');
const app = express();

app.use('/', (req, res) => {
	res.send('Welcome to my home page homie!');
});

app.listen(3000, () => {
	console.log('Wazzzapppp?');
});
