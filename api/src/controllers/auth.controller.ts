import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import config from "../utils/config";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";
import { UserDocument } from "../types";

const api_key = config.SENDGRID_API_KEY;

if (api_key) {
  sgMail.setApiKey(api_key);
}

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };

    User.findOne({ email }).then((user) => {
      if (user) {
        return res.status(400).json({ error: "Email is taken" });
      }

      const token = jwt.sign(
        { name, email, password },
        process.env.JWT_ACCOUNT_ACTIVATION as string,
        { expiresIn: "10m" }
      );

      //This message will be sent to user
      const emailData = {
        from: process.env.EMAIL_FROM as string,
        to: email,
        subject: `Account activation link`,
        html: `
         <h1>Please use the following link to activate your account</h1>
         <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
         <hr />
         <p>This email may contain sensitive information</p>
         <p>${process.env.CLIENT_URL}</p>
    `,
      };

      sgMail.send(emailData).then((sent) => {
        console.log("SIGNUP EMAIL SENT", sent);
        return res.json({
          message: `Email has been sent to ${email}. Follow the instructions to activate your account.`,
        });
      });
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Invalid Request", 400, error);
      return res.json({
        message: error.message,
      });
    }
    next(error);
  }
};

export const accountActivation = async (req: Request, res: Response) => {
  const { token } = req.body;

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_ACCOUNT_ACTIVATION as string
      ) as {
        name: string;
        email: string;
        password: string;
      };

      const { name, email, password } = decoded;
      const user = new User({ name, email, password });

      await user.save();
      return res.json({
        message: "Signup success. Please sign in.",
      });
    } catch (error) {
      console.log("JWT VERIFY AND ACCOUNT ACTIVATION ERROR", error);
      return res.status(401).json({
        error: "Expired link. Signup again.",
      });
    }
  } else {
    return res.json({
      message: "Something went wrong. Please try again.",
    });
  }
};
// Check if user is tryinng to signin but have not signed up yet.
// Check if password match with hashed_password that is saved in db if yes,
// generate token with expiry.
// The token will be sent to client.
// It will be used as jwt based authentication getSystemErrorMap.
// We allow user to access protected routes later if they have valid token.
// So jwt token is like password with expiry.
// In successful signin we will send user info and valid token.
// This token will be sent back to server from client to access protected routes later.
export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please sign up.",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match.",
      });
    }

    // User is authenticated, handle the success case here
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );
    const foundUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return res.json({
      token,
      user: foundUser,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    return res.status(500).json({
      error: "Internal server error.",
    });
  }
};
