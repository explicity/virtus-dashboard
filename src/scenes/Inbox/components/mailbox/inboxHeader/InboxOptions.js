import React, { Component } from 'react';

import _map from 'lodash/map';

import MainDropdown from 'components/dropdown/main/MainDropdown';

import data from './../../data'; 

import './inboxOptions.scss';

const selectOptions = {
  list: ['Date', 'Status'],
  label: 'Filter messages'
};

export default class InboxOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      this.props.onSelectMailbox(tab);
    }
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        <div className="nav-tabs">
          <div className="nav-tabs-inbox">
            <ul className="d-flex">
              {_map(data, item => (
                <li
                  key={item.id}
                  className={`inbox-option ${
                    activeTab === item.id ? 'active' : ''
                  }`}
                >
                  <button
                    className="inbox-option-btn"
                    onClick={() => this.toggle(item.id)}
                  >
                    <i className={`fa fa-fw ${item.icon}`} aria-hidden="true" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <MainDropdown data={selectOptions} />
          </div>
        </div>
      </div>
    );
  }
}