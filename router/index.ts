import {Router} from "express";
const router = Router();

import posting from "./posting";


router.use("/posting",[posting])


export default router;