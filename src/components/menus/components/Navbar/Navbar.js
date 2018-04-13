import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import MediaQuery from 'react-responsive';

import Notifications from './components/notifications/Notifications';
import SearchBox from './components/search/SearchBox';
import NavbarDropdown from './components/dropdown/NavbarDropdown';

import Logo from './img/logo.png';
import './navigation.scss';

export default class NavbarMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearchOpen: false,
      isOpen: false
    };

    this.updateData = this.updateData.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  updateData() {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header className="header">
        <Navbar expand="md" className="fixed-top">
          <h1>
            <Link to="/home" className="brand">
              <img
                src={Logo}
                alt="brand-logo"
                style={{ width: 118, height: 20 }}
                className="brand-logo"
              />
              <span className="sr-only">Virtus-logo</span>
            </Link>
          </h1>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navbar-main" navbar>
              <NavItem>
                <MediaQuery minWidth={768}>
                  <Link to="/home" className="btn btn-primary">
                    <span>Add</span>
                    <i className="fa fa-plus" aria-hidden="true" />
                  </Link>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                  <Link to="/home" onClick={this.toggle} className="nav-item-option">
                    Add new project
                  </Link>
                </MediaQuery>
              </NavItem>
              <NavItem>
                <SearchBox updateData={this.updateData} />
              </NavItem>
              <NavItem>
                <Notifications toggle={this.toggle} />
              </NavItem>
              <NavbarDropdown toggle={this.toggle} />
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
