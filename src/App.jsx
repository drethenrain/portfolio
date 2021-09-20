import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Uepa } from './pages/Uepa/Uepa';

import '@iconscout/unicons/css/line.css';

import './styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/uepa" component={Uepa} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
