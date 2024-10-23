import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import Handler from './Components/Handler';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact={true}
          path="/api/menu"
          Component={Menu}
        />
        <Route
          exact={true}
          path="/api/play"
          Component={Handler}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
