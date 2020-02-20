import React from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import Bikes from './components/Bikes.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={ Bikes }/>
      </Switch>
    </Router>
  );
}

export default App;
