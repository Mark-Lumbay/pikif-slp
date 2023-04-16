import { Router } from "express";
import ClientModel from "../models/clientInfo.js";
import userModel from "../models/user.js";
import pkg from "firebase-admin";
const router = Router();
const { auth } = pkg;

let clientId = 0;

router.get("/test", async (req, res) => {
  try {
    const header = req.headers.authorization;
    const token = header.split("Bearer ")[1];

    const result = await auth().verifyIdToken(token);
    req.isAuthenticated = true;
    req.token = result;

    next();
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

router.post("/setInactive/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/loadDashboard", async (req, res) => {
  const docRef = db.collection("name sa collection").doc(id);
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
  } catch (err) {
    console.log(err.log);
    res.status(500).send("Error retrieving document");
  }
});

router.get("/getClient/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
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
    const all = await db.findById(id);

    const result = await db.collection(
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

    const data = await db.findById(id);
    res.status(200).json({
      success: true,
      message: `Flight with flightID: ${id} has been updated`,
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

    const result = await ({ _id: id },
    {
      $set: {
        personId: personId,
        findings: findings,
        date: date,
      },
    });

    res.status(200).json({
      success: true,
      message: `Flight with flightID: ${id} has been updated`,
      confirmation: result,
      Before: all,
      After: data,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//search  by first name, middle name and last name
router.get("/search/params-here", async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = rqe.body.lastName;

    const data = await db.find({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
    });
    res.status(200).json({ success: true, result: data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});
export default router;
