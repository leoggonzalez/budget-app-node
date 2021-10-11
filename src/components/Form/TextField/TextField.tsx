import { FormField } from "@nerdgeschoss/react-use-form-library";

interface Props extends Partial<FormField<string>> {
  label?: string;
}

export function TextField({ label, value, onChange }: Props): JSX.Element {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange?.(event.target.value);
  }

  return (
    <div>
      {label && <label>{label}: </label>}
      <input type="text" value={value || ""} onChange={handleOnChange} />
    </div>
  );
}
