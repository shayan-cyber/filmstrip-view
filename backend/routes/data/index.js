import { Router } from "express";
const router = Router();

import { getData } from "../../controllers/index.js";

router.get("/", getData);

export default router;