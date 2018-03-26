import React, { Component } from 'react';

import { TabPane, TabContent } from 'reactstrap';

import WorkflowDnD from './dnd/WorkflowDnD';

export default class WorkflowTabs extends Component {
  render() {
    const { activeTab } = this.props;
    return (
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <h1>hi</h1>
        </TabPane>
        <TabPane tabId="2">
          <WorkflowDnD />
        </TabPane>
      </TabContent>
    );
  }
}
