import axios from "axios";

export interface Entry {
  id: string;
  accountId: string;
  amount: number;
  description?: string;
  createdAt: string;
}

export const getEntries = async (): Promise<Entry[]> => {
  const result = await axios.get("http://localhost:4000/entries");

  return result.data as Entry[];
};

export const createEntry = async ({
  data,
}: {
  data: Partial<Entry>;
}): Promise<void> => {
  await axios.post("http://localhost:4000/entries", data);
};
