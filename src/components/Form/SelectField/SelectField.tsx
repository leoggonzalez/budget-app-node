import { FormField } from "@nerdgeschoss/react-use-form-library";
import { Stack } from "../../Stack/Stack";
import { compact } from "lodash";

interface Option {
  label?: string;
  value: string;
}

interface Props extends Partial<FormField<string>> {
  label?: string;
  options: Array<string | Option>;
  emptyOption?: string | Option;
}

export function SelectField({
  label,
  value,
  options,
  emptyOption,
  onChange,
}: Props): JSX.Element {
  function handleOnChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    onChange?.(event.target.value);
  }

  return (
    <Stack size="xs">
      <label>{label}</label>
      <select value={value} onChange={handleOnChange}>
        {compact([emptyOption, ...options]).map((option) => {
          if (typeof option === "string") {
            return <option value={option}>{option}</option>;
          }
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </Stack>
  );
}
