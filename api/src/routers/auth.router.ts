import express from "express";
import { runValidation } from "../validators";
import { userSignupValidator, userSigninValidator } from "../validators/auth";
import {
  signup,
  accountActivation,
  signin,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/account-activation", accountActivation);
router.post("/signin", userSigninValidator, runValidation, signin);

export default router;
