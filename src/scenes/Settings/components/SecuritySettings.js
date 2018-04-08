import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from 'redux/actions/index.js';

class SecuritySettings extends Component {
  constructor(props) {
    super(props);

    this.clearStorage = this.clearStorage.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  clearStorage() {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }

  deleteUser() {
    const { dispatch } = this.props;
    dispatch(userActions.deleteUser());
  }

  render() {
    return (
      <div className="settings">
        <div className="settings-header">
          <h3>Security</h3>
        </div>
        <div className="settings-main">
          <div className="security-item">
            <h6 className="security-item-title">
              Deactivate account (Log Out)
            </h6>
            <p>
              Deactivating your account will remove it from Virtus within a few
              minutes. You can sign back in anytime to reactivate your account
              and restore its content.
            </p>
            <Link
              to="/"
              className="security-item-link"
              onClick={this.clearStorage}
            >
              Deactivate your account
            </Link>
          </div>
          <div className="security-item">
            <h6 className="security-item-title">Delete account</h6>
            <p>Permanently delete your account and all of your content.</p>
            <Link
              to="/"
              className="security-item-link"
              onClick={this.deleteUser}
            >
              Delete account
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(SecuritySettings);

SecuritySettings.propTypes = {
  dispatch: PropTypes.func
};
