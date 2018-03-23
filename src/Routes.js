import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory
} from 'react-router-dom';
import { Redirect } from 'react-router';

import Menus from './components/menus/Menus.js';
import SignUp from './scenes/Sign/SignUp.js';
import HomePage from './scenes/Home/HomePage.js';

const Routes = () => {
  const DefaultLayout = ({ component: Component }) => {
    let user = JSON.parse(localStorage.getItem('userData')) || {};

    return (
      <Route
        render={props =>
          user.online ? (
            <div>
              <Menus />
              <div className="main-layout">
                <div className="container">
                  <Component {...props} />
                </div>
              </div>
            </div>
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
      />
    );
  };

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <DefaultLayout path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
