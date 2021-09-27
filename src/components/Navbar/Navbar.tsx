import "./Navbar.css";
import { Container } from "../Container/Container";

export function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__logo">
          <a href="/">
            <h4>Budget App</h4>
          </a>
        </div>
        <div className="navbar__navigation">
          <ul className="navbar__links">
            <li className="navbar__link">
              <a href="/accounts">Accounts</a>
            </li>
            <li className="navbar__link">
              <a href="/income">Income</a>
            </li>
            <li className="navbar__link">
              <a href="/expenses">Expenses</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
