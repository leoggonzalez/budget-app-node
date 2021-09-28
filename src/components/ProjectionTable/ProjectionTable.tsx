import "./ProjectionTable.css";
import { useState } from "react";
import { sumBy } from "lodash";
import { entries } from "../../data/entries";
import {
  amountPerMonth,
  getEntriesPerMonth,
  getNextMonths,
} from "../../helpers/date";
import { Stack } from "../Stack/Stack";

interface Props {
  accountId: string;
}

export function ProjectionTable({ accountId }: Props): JSX.Element {
  const items = entries.filter((item) => item.accountId === accountId);

  const [months, setMonths] = useState(3);

  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    setMonths(Number(e.target.value));
  }

  const monthsToDisplay = getNextMonths(months);

  const sumPerMonth = monthsToDisplay.map((month) => {
    const entriesPerMonth = getEntriesPerMonth(items, month);
    return {
      month,
      sum: sumBy(entriesPerMonth, "amount"),
    };
  });

  return (
    <Stack size="sm">
      <header>
        <label htmlFor="projection-months">Months to project</label>
        <select
          name="projection-months"
          id="projection-months"
          onChange={handleOnChange}
          value={months}
        >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </header>
      <table className="projection-table">
        <thead>
          <tr>
            <th>Description</th>
            {monthsToDisplay.map((month) => {
              return <th key={month.id}>{month.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.description}</th>
                {monthsToDisplay.map((month) => {
                  return (
                    <td key={`${item.id}-${month.id}`}>
                      {amountPerMonth(item, month)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            <th>Total</th>
            {sumPerMonth.map((item) => {
              return <td key={item.month.id}>{item.sum} €</td>;
            })}
          </tr>
        </tbody>
      </table>
    </Stack>
  );
}
