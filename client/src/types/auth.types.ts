import { User } from "./user.types";

export type signupFormlabels = {
  NAME: string;
  EMAIL: string;
  PASSWORD: string;
};

export type signinFormlabels = {
  EMAIL: string;
  PASSWORD: string;
};

export interface authState {
  token: string;
  isLoading: boolean;
  error: boolean;
  item: User;
}

export type SigninUser = {
  email: string;
  password: string;
};

export type activateType = {
  name: string;
  token: string;
  show: boolean;
};
