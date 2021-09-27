import "./Page.css";
import { GlobalProps } from "../../model/common";
import { Container } from "../Container/Container";

export function Page({ children }: GlobalProps): JSX.Element {
  return (
    <div className="page">
      <Container>{children}</Container>
    </div>
  );
}
