import express from "express";
import {
  findById,
  findByEmail,
  findAllUsers,
  updateUser,
} from "../controllers/user.controller";
import { requireSignin, adminMiddleware } from "../controllers/auth.controller";

const router = express.Router();

router.get("/all", requireSignin, findAllUsers);
router.get("/user/:id", requireSignin, findById);
router.get("/user/email/:email", requireSignin, findByEmail);
router.put("/user/update", requireSignin, updateUser);
router.put("/admin/update", requireSignin, adminMiddleware, updateUser);

export default router;
