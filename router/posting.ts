import { Router } from "express";
import { mypro } from "../controller";

const router = Router();

router.route("/").get(mypro.getposting).post(mypro.posting);

export default router;