import { Router } from "express";
import pkg from "firebase-admin";
import clientInfo from "../models/clientInfo.js";
import clientFindings from "../models/clientFindings.js";
import clientHousing from "../models/clientHousing.js";
// import informant from "../models/informant";

const router = Router();
const { firestore } = pkg;
// setTimeout(() => {
//   firestore().collection("test").add({ value: "hatdog" });
// }, 2000);

router.post("/addClient", async (req, res) => {
  try {
    const info = req.body;

    res.send(info);
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
