import React, { Component } from 'react';
import { connect } from 'react-redux';

import { alertActions } from 'redux/actions/index.js';

import AccountSettings from './components/AccountSettings.js';
import SecuritySettings from './components/SecuritySettings.js';

import './Settings.scss';

class Settings extends Component {
  conmponentWillMount() {
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="container pt-3 pb-3">
        <div className="section-header">
          <h2 className="section-header-title">Settings</h2>
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
        </div>
        <AccountSettings />
        <SecuritySettings />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { alert } = state;
  return {
    alert
  };
};

export default connect(mapStateToProps)(Settings);
