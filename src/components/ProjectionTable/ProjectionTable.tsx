import { entries } from "../../data/entries";
import "./ProjectionTable.css";

interface Props {
  accountId: string;
}

export function ProjectionTable({ accountId }: Props): JSX.Element {
  const items = entries.filter((item) => item.accountId === accountId);

  console.log(items);

  return (
    <table className="projection-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>September</th>
          <th>October</th>
          <th>November</th>
          <th>December</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.description}</th>
              <th>{item.amount} €</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
