import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import MediaQuery from 'react-responsive';

import { userActions } from 'redux/actions/index.js';

import Notifications from './components/Notifications';

import Logo from './img/logo.png';
import Avatar from './img/user.jpg';
import './navigation.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.clearStorage = this.clearStorage.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  clearStorage() {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }

  render() {
    const { dropdownOpen } = this.state;
    return (
      <header className="header fixed-top">
        <div className="navbar">
          <Link to="/home" className="brand">
            <img
              src={Logo}
              alt="brand-logo"
              style={{ width: 118, height: 20 }}
              className="brand-logo"
            />
            <span className="sr-only">Virtus-logo</span>
          </Link>

          <MediaQuery minDeviceWidth={580}>
            <div className="navbar-main">
              <a href=" " className="btn btn-primary">
                <span>Add</span>
                <i className="fa fa-plus" aria-hidden="true" />
              </a>
              <button className="navbar-main-btn">
                <i className="fa fa-search" />
                <span className="sr-only">Search</span>
              </button>
              <Notifications />

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
                    <Link to="/settings">Settings</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/" onClick={this.clearStorage}>
                      Log Out
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={579}>
            <Dropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
              className="navbar-main-dropdown"
            >
              <DropdownToggle>
                <i className="fa fa-bars" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Add project</DropdownItem>
                <DropdownItem>Search</DropdownItem>
                <DropdownItem>Notifications</DropdownItem>
                <DropdownItem>
                  <Link to="/settings">Settings</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/" onClick={this.clearStorage}>
                    Log Out
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </MediaQuery>
        </div>
      </header>
    );
  }
}

export default connect()(Navbar);
