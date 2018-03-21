import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory
} from 'react-router-dom';

import SignUp from './scenes/Sign/SignUp.js';

const Routes = () => {
  const DefaultLayout = ({ component: Component }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Routes;
