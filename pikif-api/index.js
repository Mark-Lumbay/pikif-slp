"use strict";

import express, { json } from "express";
import cors from "cors";
import { port } from "./config.js";
import "./db.js";
import pkg from "firebase-admin";
import ClientModel from "./models/clientInfo.js";
import userModel from "./models/user.js";
import path from "./routes/route.js";

const { firestore, auth } = pkg;
const app = express();

app.use(json());
app.use(cors());
app.use(async (req, res, next) => {
  const header = req.headers.authorization;
  if (
    req.path === "/island-kids/login" ||
    req.path === "/island-kids/register" ||
    req.path === "/island-kids/system-message"
  ) {
    return next();
  }
  if (header) {
    try {
      const token = header.split("Bearer ")[1];

      const result = await auth().verifyIdToken(token);
      const uid = result.uid;

      const userStatus = await userModel.getActiveStatus(uid);

      if (!userStatus.data) {
        return res.status(401).send({ message: "Please login again" });
      }

      const user = await auth().getUser(uid);
      const action = `${user.customClaims.firstName} ${user.customClaims.lastName} performed the operaton ${req.method} on ${req.path}`;
      const name = `${user.customClaims.firstName} ${user.customClaims.lastName}`;

      const accInfo = {
        uid: uid,
        email: user.email,
        name: name,
        timestamp: firestore.FieldValue.serverTimestamp(),
      };

      await ClientModel.auditAction(accInfo, action);

      req.isAuthenticated = true;
      req.token = result;

      next();
    } catch (err) {
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
