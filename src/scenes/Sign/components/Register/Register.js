import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from '../../../../redux/actions/index.js';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        username: '',
        password: '',
        number: ''
      },
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });

    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.email && user.username && user.password && user.number) {
      dispatch(userActions.register(user));
      this.props.update('2');
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  render() {
    const { user, submitted } = this.state;
    return (
        <div className="tab-section">
            <div className="container">
                <Form>
                    <FormGroup className={submitted && !user.email ? ' has-error' : ''}>
                        <Label for="register-email" hidden>
                            Email
                        </Label>
                        <div className="icon icon-mail">
                            <Input
                                type="email"
                                name="email"
                                id="register-email"
                                placeholder={
                                    submitted && !user.email
                                        ? 'Email is required'
                                        : 'Email'
                                }
                                value={user.email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup
                        className={submitted && !user.username ? ' has-error' : ''}
                    >
                        <Label for="register-username" hidden>
                            Username
                        </Label>
                        <div className="icon icon-user">
                            <Input
                                name="username"
                                id="register-username"
                                placeholder={
                                    submitted && !user.username
                                        ? 'Username is required'
                                        : 'Username'
                                }
                                value={user.username}
                                onChange={this.handleChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup
                        className={submitted && !user.password ? ' has-error' : ''}
                    >
                        <Label for="register-password" hidden>
                            Password
                        </Label>
                        <div className="icon icon-password">
                            <Input
                                type="password"
                                name="password"
                                id="register-password"
                                placeholder={
                                    submitted && !user.password
                                        ? 'Password is required'
                                        : 'Password'
                                }
                                value={user.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup
                        className={submitted && !user.number ? ' has-error' : ''}
                    >
                        <Label for="register-number" hidden>
                            Phone number
                        </Label>
                        <div className="icon icon-phone">
                            <Input
                                type="tel"
                                name="number"
                                id="register-number"
                                placeholder={
                                    submitted && !user.number
                                        ? 'Phone number is required'
                                        : 'Phone number'
                                }
                                value={user.number}
                                onChange={this.handleChange}
                            />
                        </div>
                    </FormGroup>
                    <Button className="hvr-icon-forward" onClick={this.handleSubmit}>
                        Sign up
                    </Button>
                </Form>
            </div>
        </div>
    );
  }
}

const Register = connect()(RegisterPage);
export default Register;

Register.propTypes = {
  update: PropTypes.func
};
