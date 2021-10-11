import { useEffect, useState } from "react";
import { Dialog } from "../../components/Dialog/Dialog";
import { Page } from "../../components/Page/Page";
import { getAccounts } from "../../data/accounts";
import { Account } from "../../model/account";
import { NewAccount } from "./NewAccount";

export function Accounts(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [displayDialog, setDisplayDialog] = useState(false);

  async function loadAccounts(): Promise<void> {
    setLoading(true);
    try {
      const accounts = await getAccounts();
      setAccounts(accounts);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <>
      <Page>
        <h1>Accounts</h1>
        <button onClick={() => setDisplayDialog(true)}>New Account</button>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !accounts.length ? (
          <>
            <div>No accounts yet</div>
          </>
        ) : (
          <ul>
            {accounts.map((account) => {
              return <li>Account: {account.name}</li>;
            })}
          </ul>
        )}
      </Page>
      <Dialog open={displayDialog} onClose={() => setDisplayDialog(false)}>
        <NewAccount onClose={() => setDisplayDialog(false)} />
      </Dialog>
    </>
  );
}
