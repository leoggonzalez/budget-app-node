import { Page } from "../../components/Page/Page";
import { ProjectionTable } from "../../components/ProjectionTable/ProjectionTable";

export function Home(): JSX.Element {
  return (
    <Page>
      <h1>Home</h1>
      <ProjectionTable />
    </Page>
  );
}
