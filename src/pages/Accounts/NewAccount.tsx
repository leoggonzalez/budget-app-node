import { useForm } from "@nerdgeschoss/react-use-form-library";
import { TextField } from "../../components/Form/TextField/TextField";
import { Stack } from "../../components/Stack/Stack";
import { createAccount } from "../../data/accounts";
import { Account } from "../../model/account";

interface Props {
  onClose: () => void;
}

export function NewAccount({ onClose }: Props): JSX.Element {
  const { fields, model, onSubmit } = useForm<Partial<Account>>({
    model: {},
    handleSubmit: async () => {
      await createAccount({
        data: model,
      });
      onClose();
    },
    onSubmitError: (error) => {
      console.log(error);
    },
  });

  return (
    <Stack>
      <header>New Account</header>
      <form onSubmit={onSubmit}>
        <Stack>
          <TextField label="Name" {...fields.name} />
          <TextField label="Description" {...fields.description} />
          <footer>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button>Submit</button>
          </footer>
        </Stack>
      </form>
    </Stack>
  );
}
