import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './HomePage';
import PrefaPage from './PrefaPage';
import BonoPage from './BonoPage';
import ContactPage from './ContactPage';
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
            <Route exact path="/bono" component={BonoPage} />
            <Route exact path="/prefa" component={PrefaPage} />
            <Route exact path="/contacto" component={ContactPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
