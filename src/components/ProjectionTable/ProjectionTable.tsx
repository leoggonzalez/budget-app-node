import "./ProjectionTable.css";

export function ProjectionTable(): JSX.Element {
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
        <tr>
          <th>Kotti Dang</th>
          <th>12 €</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Random expense</th>
          <th>14 €</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>
  );
}
