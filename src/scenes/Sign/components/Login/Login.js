import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import { userActions } from '../../../../redux/actions/index.js';
import { alertActions } from './../../../../redux/actions';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { username, password, submitted } = this.state;
    const { alert, loggedIn } = this.props;
    return (
      <div className="tab-section">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <div className="container ">
          <h2 className="tab-section-title">
            Welcome <span>back!</span>
          </h2>

          <Form>
            <FormGroup className={submitted && !username ? ' has-error' : ''}>
              <Label for="login-username" hidden>
                Username
              </Label>
              <div className="icon icon-user">
                <Input
                  name="username"
                  id="login-username"
                  placeholder={
                    submitted && !username ? 'Username is required' : 'Username'
                  }
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
            </FormGroup>
            <FormGroup className={submitted && !password ? ' has-error' : ''}>
              <Label for="login-password" hidden>
                Password
              </Label>
              <div className="icon icon-password">
                <Input
                  type="password"
                  name="password"
                  id="login-password"
                  placeholder={
                    submitted && !password ? 'Password is required' : 'Password'
                  }
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </FormGroup>
            <Button className="hvr-icon-forward" onClick={this.handleSubmit}>
              Enter
            </Button>
            {loggedIn && <Redirect to="/home" />}
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loggedIn } = state.authentication;
  const { alert } = state;
  return {
    alert,
    loggedIn
  };
};

const Login = connect(mapStateToProps)(LoginPage);
export default Login;
