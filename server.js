const express = require('express');
const apiRoutes = require('./route/apiRoute');
const htmlRoutes = require('./route/pageRoute');

// Create an express server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3000;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});