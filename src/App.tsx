import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Accounts } from "./pages/Accounts/Accounts";
import { Home } from "./pages/Home/Home";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { AddEntry } from "./shared/AddEntry/AddEntry";

function App(): JSX.Element {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <AddEntry />
        <Switch>
          <Route path="/accounts">
            <Accounts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
