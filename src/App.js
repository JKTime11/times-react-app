import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Userform from './components/Userform';
import About from './components/About';
import Message from './components/Message';
import Userlist from './components/Userlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Message />
          </Route>
          <Route path="/">
            <div>
              <Userform />
              <Userlist />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  // return (
  //   <div>
  //     <Userform></Userform>
  //     <Userlist></Userlist>
  //   </div>
  // );
}

export default App;
