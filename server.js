const express = require('express');

const apiRoutes = require('./route/apiRoute.js');
const pageRoutes = require('./route/pageRoute.js');
// const uuid = require('')
const PORT = 3001;

const app = express();

// middleware for parsing Json and url data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//get route for homepage
app.use('/', apiRoutes)
app.use('/', pageRoutes)


//promise version of fs.readfil
// const readFromFile = util.promisify(fs.readFile);

// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );

// const readAndAppend = (content, file) => {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const parsedData = JSON.parse(data);
//       parsedData.push(content);
//       writeToFile(file, parsedData);
//     }
//   });
// };
app.listen(PORT, ()=>{
    console.log('api server is listening')
})