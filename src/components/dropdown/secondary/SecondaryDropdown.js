import React, { Component } from 'react';

import _map from 'lodash/map';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './secondaryDropdown.scss';

const stage = [
  'Quened',
  'Planning',
  'Design',
  'Development',
  'Testing',
  'Completed'
];

class SecondaryDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="secondary-dropdown">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          className="dropdown-secondary"
        >
          <DropdownToggle>
            <i className="fa fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Move to: </DropdownItem>
            {_map(stage, (title, index) => (
              <DropdownItem key={index}>{title}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default SecondaryDropdown;
