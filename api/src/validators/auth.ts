import { check, ValidationChain } from "express-validator";

export const userSignupValidator: ValidationChain[] = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const userSigninValidator: ValidationChain[] = [
  check("email").not().isEmpty().withMessage("Email is required"),
  check("password").not().isEmpty().withMessage("Password is required"),
];
