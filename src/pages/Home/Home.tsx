import { Page } from "../../components/Page/Page";
import { ProjectionTable } from "../../components/ProjectionTable/ProjectionTable";
import { Stack } from "../../components/Stack/Stack";
import { accounts } from "../../data/accounts";

export function Home(): JSX.Element {
  return (
    <Page>
      <Stack>
        <h1>Home</h1>
        {accounts.map((account) => {
          return (
            <Stack key={account.id}>
              <h2>{account.name}</h2>
              <ProjectionTable accountId={account.id} />
            </Stack>
          );
        })}
      </Stack>
    </Page>
  );
}
