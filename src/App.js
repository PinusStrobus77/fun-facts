import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Fact1 from './Components/Fact1';
import Fact2 from './Components/Fact2';
import Fact3 from './Components/Fact3';


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Fact1">Fun Fact 1</Link>
            </li>
            <li>
              <Link to="/Fact2">Fun Fact 2</Link>
            </li>
            <li>
              <Link to="/Fact3">Fun Fact 3</Link>
            </li>
           
          </ul>
        </nav>

        <Switch>
          <Route path="/Fact1" component={Fact1}>
            <Fact1 />
          </Route>
          <Route path="/Fact2" component={Fact2}>
            <Fact2 />
          </Route>
          <Route path="/Fact3" component={Fact3}>
            <Fact3 />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
