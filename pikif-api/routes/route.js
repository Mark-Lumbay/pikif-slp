import { Router } from "express";
import ClientModel from "../models/clientInfo.js";
const router = Router();

router.post("/addClient", async (req, res) => {
  try {
    const info = req.body;
    const result = await ClientModel.addInfo(info);
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
