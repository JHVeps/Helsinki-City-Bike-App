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

// TODO test messages for failed update in UI
export const updateUser = async (
  req: JWTRequest,
  res: Response,
  next: NextFunction
) => {
  const update = {
    name: req.body.name,
    password: req.body.password,
  };
  const id = req.auth?._id;

  console.log("UPDATE USER ", req.auth, "UPDATE DATA ", update);

  try {
    const updatedUser = await userService.updateUser(id, update);
    res.json(updatedUser);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};
