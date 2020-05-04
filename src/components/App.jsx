import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './HomePage';
import PrefaPage from './PrefaPage';
import BonoPage from './BonoPage';

import '../styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/bono">Bono Vivienda</Link>
            </li>
            <li>
              <Link to="/prefa">Prefa Vivienda</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/bono">
            <BonoPage />
          </Route>
          <Route path="/prefa">
            <PrefaPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
