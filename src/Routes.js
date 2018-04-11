import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory
} from 'react-router-dom';
import { Redirect } from 'react-router';

import Menus from './components/menus/Menus';
import SignUp from './scenes/Sign/SignUp';
import HomePage from './scenes/Home/HomePage';
import Workflow from './scenes/Workflow/Workflow';
import Raport from './scenes/Raport/Raport';
import Users from './scenes/Users/Users';
import Inbox from './scenes/Inbox/Inbox';
import Settings from './scenes/Settings/Settings';

const Routes = () => {
  const DefaultLayout = ({ component: Component }) => {
    const user = JSON.parse(localStorage.getItem('userData')) || {};

    return (
      <Route
        render={props =>
          (user.online ? (
            <div>
              <Menus />
              <div className="main-layout">
                <Component {...props} />
              </div>
            </div>
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          ))
        }
      />
    );
  };

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <DefaultLayout path="/home" component={HomePage} />
        <DefaultLayout path="/workflow" component={Workflow} />
        <DefaultLayout path="/raport" component={Raport} />
        <DefaultLayout path="/users" component={Users} />
        <DefaultLayout path="/inbox" component={Inbox} />
        <DefaultLayout path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default Routes;
