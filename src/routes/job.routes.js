import express from "express"
import {getJobsList,createJob,getJobDetails} from "../controllers/job.controller.js"

const router = express.Router()

router.get("/",getJobsList);
router.post("/",createJob);
router.get("/:id",getJobDetails);

export default router;