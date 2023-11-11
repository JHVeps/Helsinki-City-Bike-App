import mongoose from "mongoose";
import crypto from "crypto";
import { UserDocument } from "../types";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: String,
      default: "user",
    },
    resetPasswordLink: {
      data: String,
    },
  },
  { timestamps: true }
);

// virtual
userSchema
  .virtual("password")
  .set(function (this: UserDocument, password: string) {
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function (this: UserDocument) {
    return this.hashed_password;
  });

// methods
userSchema.methods = {
  authenticate: function (this: UserDocument, plainText: string) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (this: UserDocument, password: string) {
    if (!password) {
      throw new Error("Password cannot be empty");
    }
    try {
      const algorithm = "sha256";
      return crypto
        .createHmac(algorithm, this.salt) // HS256 is the algorithm we are using to encrypt the password
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  makeSalt: function (this: UserDocument) {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

export default mongoose.model<UserDocument>("User", userSchema);
