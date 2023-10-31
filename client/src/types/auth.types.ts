import { User } from "./user.types";

export type signupFormlabels = {
  NAME: string;
  EMAIL: string;
  PASSWORD: string;
};

export interface authState {
  token: string;
  isLoading: boolean;
  error: boolean;
  item: User;
}
