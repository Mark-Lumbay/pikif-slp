import { Router, query } from "express";
import ClientModel from "../models/clientInfo.js";
import userModel from "../models/user.js";
import pkg from "firebase-admin";
import clientInfo from "../models/clientInfo.js";
const router = Router();
const { auth } = pkg;

let clientId = 0;

router.get("/test", async (req, res) => {
  console.log("I was called");
  try {
    const header = req.headers.authorization;
    const token = header.split("Bearer ")[1];

    const result = await auth().verifyIdToken(token);
    req.isAuthenticated = true;
    req.token = result;
    return res.status(200).send("Verification Success");
  } catch {
    return res.status(404).send("Could not verify token");
  }
});

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

router.post("/setInactive/:id/status", async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  if (status !== "active" && status !== "inactive") {
    res.status(400).send("Invalid status");
    return;
  }

  const data = db.collection("your-collection").doc(id);
  try {
    await data.update({ status });
    res.send(`Status updated to ${status}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating status");
  }
});

router.get("/loadDashboard", async (req, res) => {
  const result = await ClientModel.loadDashboard();

  if (result.status) {
    res.status(200).send({ success: true, data: result.data });
  } else {
    res.status(500).send({ success: false, message: result.message });
  }
});

router.get("/getClient/:id", async (req, res) => {
  const id = req.params.id;

  const docRef = db.collection("clientInfo").doc(id);
  try {
    const doc = await docRef.get();
    if (!doc.exists) {
      res.status(404).send("Client not found");
      return;
    }

    const data = doc.data();
    res.json({ id: doc.id, ...data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving client info");
  }
});

//update Info
router.put("updateInfo/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const interviewDate = req.body.interviewDate;
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const status = req.body.status;
    const age = req.body.age;
    const sex = req.body.sex;
    const address = req.body.address;
    const birthDate = req.body.birthDate;
    const birthPlace = req.body.ArrivalTime;
    const religion = req.body.religion;
    const contactNum = req.body.contactNum;
    const educAttn = req.body.educAttn;
    const categoryObj = req.body.categoryObj;
    const condition = req.body.condition;
    const materials = req.body.materials;
    const appliances = req.body.appliances;
    const client = db.collection("clientInfo").doc(id);
    const all = await db.collection("clientInfo").doc(id);

    const result = await client.update(
      { _id: id },
      {
        $set: {
          interviewDate: interviewDate,
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          status: status,
          age: age,
          sex: sex,
          address: address,
          birthDate: birthDate,
          birthPlace: birthPlace,
          religion: religion,
          contactNum: contactNum,
          educAttn: educAttn,
          categoryObj: categoryObj,
          condition: condition,
          materials: materials,
          appliances: appliances,
        },
      }
    );

    const data = await db.collection("clientInfo").doc(id);
    res.status(200).json({
      success: true,
      message: `Client with client ID: ${id} has been updated`,
      confirmation: result,
      Before: all,
      After: data,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//update Findings
router.put("/updateFindings/:id", async (req, res) => {
  try {
    const personId = req.body.personId;
    const findings = req.body.findings;
    const date = req.body.date;
    const finding = db.collection("clientFindings").doc(personId);
    const all = await db.collection("clientFindings").doc(personId);

    const result = await finding.update(
      { _id: id },
      {
        $set: {
          personId: personId,
          findings: findings,
          date: date,
        },
      }
    );

    const data = await db.collection("clientFindings").doc(personId);

    res.status(200).json({
      success: true,
      message: `user with user ID: ${id} has been updated`,
      confirmation: result,
      Before: all,
      After: data,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//search  by first name, middle name and last name
router.get("/search", async (req, res) => {
  const info = req.query;

  const clientInfo = await ClientModel.getClientInfo(info);

  if (clientInfo.status) {
    res.status(200).json({ success: true, result: clientInfo });
  } else {
    res.status(400).json({ success: false, message: clientInfo.message });
  }
});
export default router;
