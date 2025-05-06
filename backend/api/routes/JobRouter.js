import express from "express";
import JobController from "../controllers/JobController.js";
const router = express.Router();

// Middlewares
import imageUpload from "../helpers/image-uploads.js";
import verifyToken from "../helpers/verify-token.js";
router.post(
  "/create",
  verifyToken,
  imageUpload.array("images"),
  JobController.createJob
);
router.get("/", JobController.getAllJobs);
router.get("/:id", JobController.getJobById);
router.patch(
  "/:id",
  verifyToken,
  imageUpload.array("images"),
  JobController.editJob
);
router.delete("/:id", verifyToken, JobController.deleteById);

export default router;
