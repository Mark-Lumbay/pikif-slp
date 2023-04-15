import { Router } from "express";
import ClientModel from "../models/clientInfo.js";
import userModel from "../models/user.js";
const router = Router();

let clientId = 0;

router.post("/addClientInfo", async (req, res) => {
  try {
    const info = req.body;
    const clientInfo = await ClientModel.addInfo(info);
    clientId = clientInfo.id;

    if (!clientInfo) res.status(400).send("Request Incomplete");
    res.status(200).send(clientId);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/register", async (req, res) => {
  const credentials = req.body;
  const registerReq = await userModel.register(credentials);

  if (!registerReq) {
    res.status(400).send("Request incomplete or invalid");
  } else {
    res.status(200).send("Registration Complete!");
  }
});

export default router;
