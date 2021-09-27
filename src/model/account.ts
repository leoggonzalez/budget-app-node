import { Entry } from "./entry";

export interface Account {
  id: string;
  name: string;
  entries?: Entry[];
}
