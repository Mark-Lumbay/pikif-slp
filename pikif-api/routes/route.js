const express = require("express");
const firebase = require("../db");
const clientInfo = require("./models/clientInfo");
const clientFindings = require("./models/clientFindings");
const clientHousing = require("./models/clientHousing");
const informant = require("./models/informant");
const firestore = firebase.firestore();

const router = express.Router();
router.post("/addClient", async (req, res) => {
  try {
    const info = req.body;
    console.log(info);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
