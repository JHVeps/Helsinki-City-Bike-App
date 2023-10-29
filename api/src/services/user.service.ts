import User from "../models/user.model";
import { UserDocument } from "../types";

const findUserByEmail = async (Email: string): Promise<UserDocument> => {
  try {
    const foundUser = await User.findOne({ Email });

    if (!foundUser) {
      throw new Error(`Email ${Email} not found`);
    }
    return foundUser;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error("Error finding user: " + error.message);
    }
    throw new Error("Error finding user");
  }
};

export default { findUserByEmail };
