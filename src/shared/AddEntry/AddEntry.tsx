import "./AddEntry.css";
import { Button } from "../../components/Button/Button";
import { Dialog } from "../../components/Dialog/Dialog";
import { useState } from "react";

export function AddEntry(): JSX.Element {
  const [displayDialog, setDisplayDialog] = useState(false);

  return (
    <>
      <div className="add-entry">
        <Button icon onClick={() => setDisplayDialog(true)}>
          +
        </Button>
        <Dialog
          open={displayDialog}
          onClose={() => setDisplayDialog(false)}
          title="Add new entry"
        >
          Do you want to create an entry?
        </Dialog>
      </div>
    </>
  );
}
