import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Trending from './pages/Trending/Trending'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Repositories from './pages/Repositories/Repositories';
import Developers from './pages/Developers/Developers';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Trending" component={Trending} />
        <Route path="/Developer" component={Developers} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
