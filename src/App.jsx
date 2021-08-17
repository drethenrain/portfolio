import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import '@iconscout/unicons/css/line.css';
import './styles.scss';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
