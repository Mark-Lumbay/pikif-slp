"use strict";

import express, { json } from "express";
import cors from "cors";
import { port } from "./config.js";
import "./db.js";

import path from "./routes/route.js";

const app = express();

app.use(json());
app.use(cors());
// app.use("/test", async (req, res, next) => {
//   try {
//     const header = req.headers.authorization;
//     const token = header.split("Bearer ")[1];

//     const result = await auth().verifyIdToken(token);
//     req.isAuthenticated = true;
//     req.token = result;

//     next();
//   } catch {
//     return res.status(404).send("Could not verify token");
//   }
// });

app.listen(port, () => {
  console.log(`Listening on url http://localhost${port}`);
});

app.use("/island-kids", path);

export default app;
