import React, { Component } from 'react';

import _map from 'lodash/map';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';

import InboxItem from 'scenes/Home/components/inbox/components/InboxItem';
import data from 'scenes/Home/components/inbox/components/data';

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
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="navbar-main-dropdown"
      >
        <DropdownToggle>
          <i className="fa fa-bell-o" aria-hidden="true" />
          {showBadge && <Badge color="primary"> </Badge>}
          <span className="sr-only">Notifications</span>{' '}
        </DropdownToggle>
        <DropdownMenu>
          {_map(
            data,
            (item, index) =>
              index < 5 && (
                <DropdownItem key={index}>
                  <InboxItem item={item} />
                </DropdownItem>
              )
          )}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
