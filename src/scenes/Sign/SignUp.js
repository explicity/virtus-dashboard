import React, { Component } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

import SignUpTabs from './components/SignUpTabs.js';

import Logo from './img/logo.png';
import './signup-section.scss';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '2'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return ( 
        <div className="signup-section">
            <div className="inner">
                <div className="inner-header">
                    <header className="brand">
                        <img src={Logo} alt="brand-logo" />
                    </header>

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === '1' ? 'active' : ''}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Register
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === '2' ? 'active' : ''}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Login
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <SignUpTabs activeTab={this.state.activeTab} update={this.toggle} />
            </div>
        </div>
    );
  }
}
