import { Dispatch, SetStateAction } from "react";

export type Order = "asc" | "desc";

export interface appBarProps {
  title: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export interface tableHeadNotificationProps {
  color: string;
  text: string;
}

export interface LinkButtonProps {
  textDecoration: string;
  color: string;
  fontSize: string;
  path: string;
  title: string;
}
