/*
 *    Komodo
 * ************* */

require('dotenv').config()

/*
 *    Server
 * ************* */ 
const 
  express = require("express"),
  { engine } = require('express-handlebars'),
  bodyParser = require("body-parser"),
  //cors = require("cors"),
  app = express();

app.set('view engine', 'hbs')
app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main'
}));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Cors (from front-end application)
// app.use(cors({
//   origin: ['http://localhost:8080'],
//   methods: ['GET'],
//   credentials: true
// }))

// Router HTTP
const ROUTER = require('./back/router')
app.use('/', ROUTER)


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
require("./discord/index.js")