"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(config.port, () => {
  console.log(`Listening on url http://localhost${config.port}`);
});
