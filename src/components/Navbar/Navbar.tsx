import "./Navbar.css";
import { Container } from "../Container/Container";

export function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <Container>
        <h4>Budget App</h4>
      </Container>
    </nav>
  );
}
