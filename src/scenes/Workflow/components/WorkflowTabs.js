import React, { Component } from 'react';

import { TabPane, TabContent } from 'reactstrap';

import WorkflowDnD from './dnd/WorkflowDnD';
import WorkflowProjects from './projects/WorkflowProjects';

export default class WorkflowTabs extends Component {
  render() {
    const { activeTab } = this.props;
    return (
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <WorkflowProjects />
        </TabPane>
        <TabPane tabId="2">
          <WorkflowDnD />
        </TabPane>
      </TabContent>
    );
  }
}
