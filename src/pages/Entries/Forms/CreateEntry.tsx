import { useForm } from "@nerdgeschoss/react-use-form-library";
import { useEffect, useState } from "react";
import { NumberField } from "../../../components/Form/NumberField/NumberField";
import { SelectField } from "../../../components/Form/SelectField/SelectField";
import { TextField } from "../../../components/Form/TextField/TextField";
import { Stack } from "../../../components/Stack/Stack";
import { getAccounts } from "../../../data/accounts";
import { Account } from "../../../model/account";
import { createEntry, Entry } from "../../../model/entry";

interface Props {
  onClose: () => void;
}

export function CreateEntry({ onClose }: Props): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [error, setError] = useState<Error | null>(null);

  async function loadAccounts(): Promise<void> {
    setLoading(true);
    try {
      const accounts = await getAccounts();
      setAccounts(accounts);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadAccounts();
  }, []);

  const { model, fields, onSubmit } = useForm<Partial<Entry>>({
    model: {},
    handleSubmit: async () => {
      await createEntry({
        data: model,
      });
      onClose();
    },
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <NumberField label="Amount" {...fields.amount} />
        <TextField label="Description" {...fields.description} />
        {loading ? (
          "Loading accounts..."
        ) : error ? (
          "Error loading acounts."
        ) : (
          <SelectField
            label="Accounts"
            {...fields.accountId}
            options={accounts.map((account) => ({
              label: account.name || `Account N°: ${account.id}`,
              value: account.id,
            }))}
            emptyOption={{ label: "Please select an account ", value: "" }}
          />
        )}
        <footer>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button>Submit</button>
        </footer>
      </Stack>
    </form>
  );
}
