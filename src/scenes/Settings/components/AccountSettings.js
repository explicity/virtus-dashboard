import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { userActions } from 'redux/actions/index.js';

import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

class AccountSettings extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('userData'));

    this.setState({
      username: user.username,
      password: user.password
    });
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
      dispatch(userActions.update(username, password));
    }
  }

  showPassword() {
    let input = document.getElementById('user-password');

    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="settings">
        <div className="settings-header">
          <h3>Account</h3>
          <p>Change your basic account and language settings.</p>
        </div>
        <div className="settings-main">
          <Form>
            <FormGroup row>
              <Label for="username" sm={4}>
                Username
              </Label>
              <Col sm={8}>
                <Input
                  name="username"
                  id="username"
                  placeholder={
                    submitted && !username ? 'Username is required' : 'Username'
                  }
                  value={username}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="user-password" sm={4}>
                Password
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="user-password"
                  placeholder={
                    submitted && !password ? 'Password is required' : 'Password'
                  }
                  value={password}
                  onChange={this.handleChange}
                />
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" onClick={this.showPassword} />Show
                    password
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="languageSelect" sm={4}>
                Language
              </Label>
              <Col sm={8}>
                <Input type="select" name="select" id="languageSelect">
                  <option>English</option>
                  <option>Ukrainian</option>
                  <option>Russian</option>
                </Input>
              </Col>
            </FormGroup>

            <div className="col-12 col-sm-8 offset-sm-4 settings-main-btn">
              <button className="btn btn-secondary" onClick={this.handleSubmit}>
                Save changes
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect()(AccountSettings);

AccountSettings.propTypes = {
  dispatch: PropTypes.func
};