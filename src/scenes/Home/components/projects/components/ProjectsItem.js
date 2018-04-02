import React, { Component } from 'react';

import SecondaryDropdown from 'components/dropdown/secondary/SecondaryDropdown';

import './projects-item.scss';

export default class ProjectsItem extends Component {
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
          <SecondaryDropdown />
        </div>
      </div>
    );
  }
}
