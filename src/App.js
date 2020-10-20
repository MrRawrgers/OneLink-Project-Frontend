import React from 'react';
import './App.css';
import Login from './containers/Login';
import MainPage from './containers/MainPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container2">
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={MainPage} />
      </div>
    </Router>
  )
}

export default App;