import React, { Component } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

import WorkflowTabs from './components/WorkflowTabs';

import './workflow.scss';

export default class Workflow extends Component {
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
    const { activeTab } = this.state;
    return (
      <div className="tabs">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === '1' ? 'active' : ''}
              onClick={() => {
                this.toggle('1');
              }}
            >
              All projects
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
        </Nav>
        <WorkflowTabs activeTab={activeTab} />
      </div>
    );
  }
}
