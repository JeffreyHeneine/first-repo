import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import AboutUs from "./components/aboutUs.component";
import Partners from "./components/partners.component";
import ForgotPass from './components/forgotPass';
import ConfirmPass from './components/confirmpass.component';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/partners'}>Partners</Link>
          <Link className='navbar-brand' to={'/about-us'}>Jeffrey&Rawad.com</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/about-us" component={AboutUs}/>
            <Route path="/partners" component={Partners}/>
            <Route path="/forgot-pass" component={ForgotPass}/>
            <Route path="/confirm-pass" component={ConfirmPass}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
