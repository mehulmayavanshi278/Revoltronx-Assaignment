const dotenv = require("dotenv");
const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
const next = require("next");




dotenv.config();

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // You can specify allowed origins here
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

//   require("./startup/db.startup")(server);
//   require("./startup/routes.startup")(server);

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  
  require('./startup/index.startup')(server);

  
});
