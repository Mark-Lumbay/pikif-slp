"use strict";

import express, { json } from "express";
import cors from "cors";
import { port } from "./config.js";
import "./db.js";

import path from "./routes/route.js";

const app = express();

app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on url http://localhost${port}`);
});

app.use("/island-kids", path);

export default app;
