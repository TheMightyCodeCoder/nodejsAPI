const express = require('express');
const app = express();

app.use('/', (req, res) => {
	res.send('Welcome to my home page throw down');
});

const port = process.env.port || 3000;
app.listen(port, () => {
	console.log('Wazzzapppp?');
});
