import cors from "cors";
import express from "express";
import { getBlogs, postBlogs } from "../controller/controller.js";

const router = express.Router();

router.route("/blogs").get(getBlogs).post(postBlogs);

export default router;
