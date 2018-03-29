import React, { Component } from 'react';

import _map from 'lodash/map';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './projects-item.scss';

const stage = [
  'Quened',
  'Planning',
  'Design',
  'Development',
  'Testing',
  'Completed'
];

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
              <DropdownItem>
                <div className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="#">
                    Move to...
                  </a>
                  <ul className="dropdown-menu">
                    {_map(stage, (item, index) => (
                      <li className="dropdown-item" key={index}>
                        <a tabindexndex="-1" href="#">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
