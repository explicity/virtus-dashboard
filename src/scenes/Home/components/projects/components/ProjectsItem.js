import React, { Component } from 'react';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './projects-item.scss';

export default class ProjectsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <div className="mr-3">
          <img
            src={item.url}
            alt="user"
            style={{ width: 42, height: 42 }}
            className="item-img"
          />
        </div>
        <div className="project">
          <div>
            <p className="project-title">{item.title}</p>
            <div className="project-secondary">
              <span className="mr-2">{item.company}</span>
              <i className="fa fa-circle" aria-hidden="true" />
              <span className="ml-2">${item.price}</span>
            </div>
          </div>
          <Dropdown
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
            className="dropdown-secondary"
          >
            <DropdownToggle>
              <i className="fa fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
