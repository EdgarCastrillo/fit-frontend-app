import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Splash from './pages/Splash';
import Instructions from './pages/Instructions';

import AuthProvider from './contexts/auth-context.js';

import '../src/SCSS/css/main.css';

import firebase from "firebase";
 
const config = {
  apiKey: "AIzaSyDyTjiXMb-ZWnEiyOeU0czWUFPeCt-W3us",
  authDomain: "fit-app-bc00a.firebaseapp.com",
  storageBucket: "gs://fit-app-bc00a.appspot.com"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="main">
            <Switch>
              <AnonRoute path='/' exact component={Splash} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/explore" component={Explore} />
              <AnonRoute path="/instructions" exact component={Instructions} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
