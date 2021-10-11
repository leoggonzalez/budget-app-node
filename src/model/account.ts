import { Entry } from "./entry";

export interface Account {
  id: string;
  name?: string;
  description?: string;
  entries?: Entry[];
}
