import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Page } from "../../components/Page/Page";
import { Stack } from "../../components/Stack/Stack";
import { getAccount } from "../../data/accounts";
import { Account } from "../../model/account";

export function AccountDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState<Account | null>(null);
  const [error, setError] = useState<Error | null>(null);

  async function loadAccounts(): Promise<void> {
    setLoading(true);
    try {
      const account = await getAccount(id);
      setAccount(account);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <Page>
      <Stack>
        <h1>Account Details</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !account ? (
          <>
            <div>No accounts yet</div>
          </>
        ) : (
          <>
            <h2>{account.name || "No name"}</h2>
            <Stack size="sm">
              <h3>
                <strong>Description</strong>
              </h3>
              <p>{account.description || "No description."}</p>
            </Stack>
            <footer>
              <button>Edit Account</button>
            </footer>
          </>
        )}
      </Stack>
    </Page>
  );
}
