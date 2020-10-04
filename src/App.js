import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Intros from './components/layout/Intros';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Intros />
      </Fragment>
    </Router>
  );
};

export default App;
