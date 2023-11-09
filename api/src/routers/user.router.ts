import express from "express";
import {
  findById,
  findByEmail,
  findAllUsers,
  updateUser,
} from "../controllers/user.controller";
import { requireSignin } from "../controllers/auth.controller";

const router = express.Router();

router.get("/all", requireSignin, findAllUsers);
router.get("/user/:id", requireSignin, findById);
router.get("/user/email/:email", requireSignin, findByEmail);
router.put("/user/update", requireSignin, updateUser);

export default router;
