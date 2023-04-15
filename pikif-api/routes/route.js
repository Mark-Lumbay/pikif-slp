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

router.post("/setInactive/:id", async (req, res) => {
  try {
    
  } catch(err) {
    console.log(err.message);
  }
});

router.get("/loadDashboard", async (req, res) => {
  const docRef = db.collection('name sa collection').doc(id);
  try {
    const data = doc.data();
    const dataFields = {
      id: req.params.id,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      age: data.age,
      sex: data.sex,
      category: data.category,
      educAttn: data.educAttn,
    };
    // res. ??? (dataFields); dont know what to output here

  } catch(err) {
    console.log(err.log);
    res.status(500).send('Error retrieving document');
  }
});

router.get("/getClient/:id", async (req, res) => {
  try {
    
  } catch(err) {
    console.log(err.message);
  }
});

export default router;
