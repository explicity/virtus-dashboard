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
  const DefaultLayout = ({ component: Component }) => ( 
    <Route
      render={props =>
        localStorage.getItem('userData') ? (
          <div>
              <Menus />
              <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{ pathname: '/', state: { from: props.location } }}
          />
        )
      }
    />
  );

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
