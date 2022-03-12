const express = require('express');
const fs = require('fs');
var notes = fs.readFileSync('./db/db.json');
const apiRoutes = require('./route/apiRoute.js');
const pageRoutes = require('./route/pageRoute.js');
// const uuid = require('')
const PORT = process.env.PORT || 3001;

const app = express();

// middleware for parsing Json and url data

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
//get route for homepage
app.use('/', apiRoutes)
app.use('/', pageRoutes)

app.listen(process.env.PORT || 3000, ()=>{
    console.log('api server is listening')
})