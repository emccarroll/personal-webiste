import logo from './logo.svg';
import LandingPage from './Pages/LandingPage';
import Interests from './Pages/Interests';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Interests">
            <Interests />
          </Route>
          <Route path="/users">
            <LandingPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
