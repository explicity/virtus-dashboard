import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import _map from 'lodash/map';

import store from 'redux/store';

import './dropdown.scss';

class MainDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      activeTab: this.props.data.list[0],
      dropdownOpen: false
    };
  }

  toggle(tab) {
    store.dispatch({
      type: 'SORT_STATUS',
      payload: {
        status: tab
      }
    });

    this.setState({
      activeTab: tab
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { data } = this.props;
    const { activeTab, dropdownOpen } = this.state;
    return (
      <div className="dropdown-main">
        <span className="dropdown-label">{data.label}: </span>
        <Dropdown isOpen={dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle caret>{activeTab}</DropdownToggle>
          <DropdownMenu>
            {_map(data.list, (item, index) => (
              <DropdownItem
                key={index}
                onClick={() => {
                  this.toggle(item);
                }}
              >
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default connect()(MainDropdown);
