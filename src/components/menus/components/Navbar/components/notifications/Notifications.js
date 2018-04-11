import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _map from 'lodash/map';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';
import MediaQuery from 'react-responsive';

import InboxItem from 'scenes/Home/components/inbox/components/InboxItem';
import data from 'scenes/Inbox/components/data';

import './notifications.scss';

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBadge: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showBadge: true });
    }, 3000);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { showBadge } = this.state;
    return (
      <div>
        <MediaQuery minWidth={768}>
              <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="navbar-main-dropdown"
      >
        <DropdownToggle>
          <i className="fa fa-bell-o" aria-hidden="true" />
          {showBadge && <Badge color="primary" />}
          <span className="sr-only">Notifications</span>{' '}
        </DropdownToggle>
        <DropdownMenu>
          {_map(
            data[0].emails,
            (item, index) =>
              index < 5 && (
                <DropdownItem key={index}>
                  <InboxItem item={item} />
                </DropdownItem>
              )
          )}
        </DropdownMenu>
      </Dropdown>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <Link to='/inbox' className="nav-item-option">Messages</Link>
        </MediaQuery>
      </div>
    );
  }
}
