import React from 'react';

import { TabPane, TabContent } from 'reactstrap';

import WorkflowDnD from './dnd/WorkflowDnD';
import WorkflowProjects from './projects/WorkflowProjects';

const WorkflowTabs = ({ activeTab }) => {
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
};

export default WorkflowTabs;
