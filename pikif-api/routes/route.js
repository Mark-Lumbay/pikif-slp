import { Router, query } from "express";
import ClientModel from "../models/clientInfo.js";
import userModel from "../models/user.js";
import pkg from "firebase-admin";
import clientInfo from "../models/clientInfo.js";
import user from "../models/user.js";
const router = Router();
const { firestore, auth } = pkg;

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

// Completed
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

// Completed
router.post("/register", async (req, res) => {
  const credentials = req.body;
  const registerReq = await userModel.register(credentials);

  if (!registerReq) {
    res.status(400).send("Request incomplete or invalid");
  } else {
    res.status(200).send("Registration Complete!");
  }
});

// Completed
router.post("/setInactive/toggle/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ClientModel.toggleStatus(id);
    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
  }
});

// Completed
router.get("/loadDashboard", async (req, res) => {
  const result = await ClientModel.loadDashboard();

  if (result.status) {
    res.status(200).send({ success: true, data: result.data });
  } else {
    res.status(500).send({ success: false, message: result.message });
  }
});

// Completed
router.get("/getClient/:id", async (req, res) => {
  if (req.params.id == ":id")
    return res.status(400).send({ success: false, message: "No ID Passed" });

  const id = req.params.id;
  const result = await ClientModel.getSpecClient(id);

  if (result.status) {
    res.status(200).send({ success: true, data: result.data });
  } else {
    res.status(500).send({ success: false, message: result.message });
  }
});

//update Info
router.put("/updateInfo/:id", async (req, res) => {
  try {
    const info = req.body;
    const id = req.params.id;

    console.log(id);

    const updateResult = await ClientModel.updateClient(info, id);
    if (updateResult) {
      res.status(200).send({ success: true });
    } else {
      res.status(500).send({ success: false });
    }
  } catch (err) {
    res.status(500).send({ success: false });
  }
});

//update Findings
router.put("/updateFindings", async (req, res) => {
  try {
    const id = req.query.id;

    const data = {
      date: req.body.date,
      findings: req.body.findings,
    };
    const result = await ClientModel.updateFinding(data, id);
    const findingID = firestore().collection("clientFindings");
    const query = findingID.where("personId", "==", id);
    try {
      const snapshot = await query.get();
      if (snapshot.empty) {
        return { status: false, message: "No Matching Documents" };
      }
      const user = snapshot.docs[0].data();
      console.log(user);
      const personId = snapshot.docs[0].id;
      console.log(personId);
      res.status(200).json({
        success: true,
        result,
        user,
      });
    } catch (error) {
      return { status: false, message: error.message };
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Completedimage.png
//search  by first name, last name
router.get("/search", async (req, res) => {
  const info = req.query;

  try {
    const clientInfo = await ClientModel.getClientInfo(info);

    if (clientInfo.status) {
      res.status(200).json({ success: true, result: clientInfo });
    } else {
      res.status(400).json({ success: false, message: clientInfo.message });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.post("/addFindings/:id", async (req, res) => {
  const id = req.params.id;
  const findings = req.body;

  try {
    const addFindingsRes = await ClientModel.addClientFindings(id, findings);
    if (addFindingsRes.data.success) return true;
    return false;
  } catch (err) {
    return false;
  }
});

router.get("/getUserDetails/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const userDetails = await userModel.getUserDetails(id);
    return res.status(200).send({ data: userDetails });
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/updateUserInfo/:id", async (req, res) => {
  const id = req.params.id;
  const info = req.body;

  try {
    const response = await userModel.updateUserDetails(info, id);

    return res.status(200).send({ data: response });
  } catch (err) {
    return res.status(500).send({ message: `Internal Server Error ${err}` });
  }
});

router.put("/updateEmail/:id", async (req, res) => {
  const { currText, newText } = req.body;
  const emailData = {
    newEmail: newText,
    currEmail: currText,
  };
  const id = req.params.id;
  try {
    const response = await userModel.updateUserEmail(emailData, id);

    return res.status(200).send({ data: response });
  } catch (err) {
    return res.status(400).send({ status: false });
  }
});

router.put("/updatePassword/:id", async (req, res) => {
  const id = req.params.id;
  const { currText, newText } = req.body;
  const passData = {
    newPass: newText,
    oldPass: currText,
  };

  try {
    const result = await userModel.updateUserPass(passData, id);
    if (!result.success)
      return res.status(400).send({ message: "Incorrect Password" });
    return res.status(200).send({ message: "Update successful" });
  } catch (err) {
    return res.status(500).send({ message: "Error in updating password!" });
  }
});

router.get("/getUserAuth/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const userAuth = await userModel.getUserAuth(id);
    if (userAuth.success)
      return res.status(200).send({ success: true, data: userAuth.data });
  } catch (err) {
    return res.status(500).send({ success: false, message: err });
  }
});
export default router;
