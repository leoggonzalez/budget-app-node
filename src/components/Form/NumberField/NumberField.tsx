import { FormField } from "@nerdgeschoss/react-use-form-library";
import { Stack } from "../../Stack/Stack";

interface Props extends Partial<FormField<number>> {
  label?: string;
}

export function NumberField({ label, value, onChange }: Props): JSX.Element {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange?.(Number(event.target.value));
  }

  return (
    <Stack size="xs">
      {label && <label>{label}: </label>}
      <input value={value || ""} onChange={handleOnChange} type="number" />
    </Stack>
  );
}
