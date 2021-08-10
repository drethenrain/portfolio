import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
