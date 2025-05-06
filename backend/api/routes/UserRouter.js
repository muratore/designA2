import express from "express";
import UserController from "../controllers/UserController.js";
const router = express.Router();

// Middlewares
import verifyToken from "../helpers/verify-token.js";
import imageUpload from "../helpers/image-uploads.js";
router.post("/create", UserController.createUser);
router.post("/login", UserController.login);
router.get("/checkuser", UserController.checkUser);
router.patch(
  "/edit/:id",
  verifyToken,
  imageUpload.single("image"),
  UserController.editUser
);

export default router;
