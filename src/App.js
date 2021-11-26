import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Trending from './pages/Trending/Trending'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Trending />
  </BrowserRouter>

  );
}

export default App;
