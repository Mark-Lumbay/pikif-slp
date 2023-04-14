import { Router } from "express";
import ClientModel from "../models/clientInfo.js";
import InformantModel from "../models/informant.js";
const router = Router();

let clientId = 0;

router.post("/addClientInfo", async (req, res) => {
  try {
    const info = req.body;
    const clientInfo = await ClientModel.addInfo(info);
    clientId = clientInfo.id;
    res.status(200).send(clientId);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/addInformantInfo", async (req, res) => {
  try {
    const info = req.body;
    info.personId = clientId;
    const result = await InformantModel.addInfo(info);
    res.send(result.id);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/addClientHousing", async (req, res) => {
  try {
    const info = req.body;
    info.personId = clientId;
    const result = await ClientModel.addHousing(info);
    res.send(result.id);
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
