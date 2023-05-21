"use strict";

import express, { json } from "express";
import cors from "cors";
import { port } from "./config.js";
import "./db.js";
import pkg from "firebase-admin";
const { firestore, auth } = pkg;

import path from "./routes/route.js";

const app = express();

app.use(json());
app.use(cors());
app.use(async (req, res, next) => {
  const header = req.headers.authorization;
  console.log(req.path);
  if (
    req.path === "/island-kids/login" ||
    req.path === "/island-kids/register"
  ) {
    return next();
  }
  if (header) {
    try {
      const token = header.split("Bearer ")[1];

      const result = await auth().verifyIdToken(token);
      req.isAuthenticated = true;
      req.token = result;

      next();
    } catch (err) {
      console.log(err);
      return res.status(404).send("Could not verify token");
    }
  } else {
    return res.status(400).send("No Authorization Header Present");
  }
});

app.listen(port, () => {
  console.log(`Listening on url http://localhost${port}`);
});

app.use("/island-kids", path);

export default app;
