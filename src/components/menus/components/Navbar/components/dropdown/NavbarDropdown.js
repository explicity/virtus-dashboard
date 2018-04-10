import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem
} from 'reactstrap';
import MediaQuery from 'react-responsive';

import { userActions } from 'redux/actions/index';

import Avatar from './../../img/user.jpg';

class NavbarDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleActiveTab = this.toggleActiveTab.bind(this);
    this.clearStorage = this.clearStorage.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleActiveTab() {
    const { dispatch } = this.props;
    dispatch(userActions.currentPage('0'));
  }

  clearStorage() {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }

  render() {
    const { dropdownOpen } = this.state;
    return (
      <div>
        <MediaQuery minWidth={768}>
          <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              tag="span"
              onClick={this.toggle}
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
            >
              <div className="avatar hvr-icon-down">
                <span className="sr-only">User</span>
                <img
                  src={Avatar}
                  alt="user-avatar"
                  style={{ width: 35, height: 35 }}
                  className="avatar-img"
                />
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/settings" onClick={this.toggleActiveTab}>
                  Settings
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/" onClick={this.clearStorage}>
                  Log Out
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavItem>
            <Link
              to="/settings"
              onClick={this.toggleActiveTab}
              className="nav-item-option"
            >
              Settings
            </Link>
          </NavItem>
          <NavItem>
            {' '}
            <Link
              to="/"
              onClick={this.clearStorage}
              className="nav-item-option"
            >
              Log Out
            </Link>
          </NavItem>
        </MediaQuery>
      </div>
    );
  }
}

export default connect()(NavbarDropdown);

NavbarDropdown.propTypes = {
  dispatch: PropTypes.func
};