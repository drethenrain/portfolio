import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Uepa } from './pages/Uepa/Uepa';

import '@iconscout/unicons/css/line.css';

import './styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/uepa" component={Uepa} />
    </BrowserRouter>
  );
}

export default App;
