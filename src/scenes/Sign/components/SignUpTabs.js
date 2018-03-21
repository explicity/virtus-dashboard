import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TabPane, TabContent } from 'reactstrap';

import Login from './Login/Login.js';
import Register from './Register/Register.js';

import './signup-tabs.scss';

export default class SignUpTabs extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  updateState(state = {}) {
    this.props.update(state);
  }

  render() {
    return (
        <TabContent activeTab={this.props.activeTab}>
            <TabPane tabId="1">
                <Register update={this.updateState} />
            </TabPane>
            <TabPane tabId="2">
                <Login />
            </TabPane>
        </TabContent>
    );
  }
}

SignUpTabs.propTypes = {
  update: PropTypes.func,
  activeTab: PropTypes.string
};
