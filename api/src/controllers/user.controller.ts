import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";
import { BadRequestError } from "../helpers/apiError";
import { Request as JWTRequest } from "express-jwt";

export const findByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await userService.findByEmail(req.params.email));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};

export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await userService.findById(req.params.id));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};

export const findAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await userService.findAllUsers());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    }
    next(error);
  }
};

export const updateUser = async (
  req: JWTRequest,
  res: Response,
  next: NextFunction
) => {
  console.log("UPDATE USER ", req.auth, "UPDATE DATA ", req.body);
};

// TODO
// ) => {
//   try {
//     const update = req.body;
//     console.log("UPDATE USER ", req.auth, "UPDATE DATA ", update);
//     const updatedUser = await userService.updateUser(update);
//     res.json(updatedUser);
//   } catch (error) {
//     if (error instanceof Error && error.name == "ValidationError") {
//       next(new BadRequestError("Invalid Request", 400, error));
//     } else {
//       next(error);
//     }
//   }
// };
