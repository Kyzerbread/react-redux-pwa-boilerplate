import { User } from "./user";

export type HouseName = string;
export type House = {
  id: UniqueId;
  name: HouseName;
  members: [User];
};
