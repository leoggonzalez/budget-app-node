import axios from "axios";
import { Account } from "../model/account";

export const getAccounts = async (): Promise<Account[]> => {
  const result = await axios.get("http://localhost:4000/accounts");

  return result.data as Account[];
};

export const getAccount = async (id: string): Promise<Account> => {
  const result = await axios.get(`http://localhost:4000/accounts/${id}`);

  console.log(result);

  return result.data as Account;
};

export const createAccount = async ({
  data,
}: {
  data: Partial<Account>;
}): Promise<void> => {
  await axios.post("http://localhost:4000/accounts", data);
};
