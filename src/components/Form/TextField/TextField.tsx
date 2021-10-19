import { FormField } from "@nerdgeschoss/react-use-form-library";
import { Stack } from "../../Stack/Stack";

interface Props extends Partial<FormField<string>> {
  label?: string;
}

export function TextField({ label, value, onChange }: Props): JSX.Element {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange?.(event.target.value);
  }

  return (
    <Stack size="xs">
      {label && <label>{label}: </label>}
      <input type="text" value={value || ""} onChange={handleOnChange} />
    </Stack>
  );
}
