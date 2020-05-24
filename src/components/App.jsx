import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './HomePage';
import PrefaPage from './PrefaPage';
import BonoPage from './BonoPage';
import NotFoundPage from './NotFoundPage';
import Navbar from './Navbar';
import Footer from './Footer';

import '../styles/App.scss';

function App() {
  return (
    <Router>
      <div>
        <Route component={Navbar} />

        <div style={{ paddingTop: '80px' }}>
          <Switch>
            <Route exact path="/bono">
              <BonoPage />
            </Route>
            <Route exact path="/prefa">
              <PrefaPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route default>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
