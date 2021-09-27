import "./Navbar.css";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

export function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__logo">
          <Link to="/">
            <h4>Budget App</h4>
          </Link>
        </div>
        <div className="navbar__navigation">
          <ul className="navbar__links">
            <li className="navbar__link">
              <Link to="/accounts">Accounts</Link>
            </li>
            <li className="navbar__link">
              <Link to="/income">Income</Link>
            </li>
            <li className="navbar__link">
              <Link to="/expenses">Expenses</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
