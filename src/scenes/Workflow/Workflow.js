import React, { Component } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

import MainDropdown from 'components/dropdown/main/MainDropdown';

import WorkflowTabs from './components/WorkflowTabs';
import data from './components/data';

import './workflow.scss';

const selectOptions = {
  list: ['All', 'Symu.co', 'Facebook', 'Google'],
  label: 'Show projects'
};

export default class Workflow extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
    const { activeTab } = this.state;
    return (
      <div className="tabs">
        <Nav tabs>
          <div className="d-flex">
            <NavItem>
              <NavLink
                className={activeTab === '1' ? 'active' : ''}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                All projects ({data.length})
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '2' ? 'active' : ''}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Workflow
              </NavLink>
            </NavItem>
          </div>
          <MainDropdown data={selectOptions} />
        </Nav>
        <WorkflowTabs activeTab={activeTab} />
      </div>
    );
  }
}
