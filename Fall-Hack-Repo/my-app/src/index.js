const mysql = require('mysql');
const events = require('./events');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host     : 'hackabois.mysql.database.azure.com',
  user     : 'hackabois',
  password : 'Time-123',
  database : 'hackabois'
});
 
connection.connect();
 
// connection.query("SELECT userName, score FROM scoreboard order by score DESC;", function (error, results, fields) {
//   if (error) throw error;

//   for (let i = 0; i < results.length; i++)
//     console.log('The score is: ', results[i].userName, results[i].score);
// });
const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

connection.end();