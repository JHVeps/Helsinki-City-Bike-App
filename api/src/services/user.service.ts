import { MongooseError } from "mongoose";
import { NotFoundError } from "../helpers/apiError";
import User from "../models/user.model";
import { UserDocument } from "../types";

const findByEmail = async (email: string): Promise<UserDocument> => {
  try {
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      throw new NotFoundError(`User with email: ${email} not found.`);
    }
    foundUser.hashed_password = ""; // hide value
    foundUser.salt = ""; // hide value
    return foundUser;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new NotFoundError(
        `User with email: ${email} not found. ${error.message}`
      );
    }
    throw new Error("Error finding user " + error.message);
  }
};

const findById = async (_id: string): Promise<UserDocument> => {
  try {
    const foundUser = await User.findById({ _id });

    if (!foundUser) {
      throw new NotFoundError(`User ${_id} not found`);
    }
    foundUser.hashed_password = ""; // hide value
    foundUser.salt = ""; // hide value
    return foundUser;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error("Error finding user " + error.message);
    }
    throw new Error("Error finding user " + error.message);
  }
};

const findAllUsers = async (): Promise<UserDocument[]> => {
  try {
    const foundUsers = await User.find();
    if (!Array.isArray(foundUsers) || foundUsers.length === 0) {
      throw new NotFoundError("Error finding users");
    }
    return foundUsers;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error("Error finding users " + error.message);
    }
    throw new Error("Error finding users " + error.message);
  }
};

const updateUser = async (
  _id: string,
  update: {
    name?: string;
    password?: string;
  }
): Promise<UserDocument | null> => {
  console.log(update);

  if (!update.name) {
    throw new Error("Name is required");
  }

  if (update.password) {
    if (update.password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
  }

  try {
    const foundUser = await User.findByIdAndUpdate(_id, update, {
      new: true,
    });

    if (!foundUser) {
      throw new NotFoundError(`User ${_id} not found`);
    }

    foundUser.hashed_password = ""; // hide value
    foundUser.salt = ""; // hide value

    return foundUser;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error("Error finding user " + error.message);
    }
    throw new Error("Error finding user " + error.message);
  }
};

export default { findByEmail, findById, findAllUsers, updateUser };
