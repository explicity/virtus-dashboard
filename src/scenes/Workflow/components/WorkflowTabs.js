import React from 'react';
import PropTypes from 'prop-types';

import { TabPane, TabContent } from 'reactstrap';

import WorkflowDnD from './dnd/WorkflowDnD';
import WorkflowProjects from './projects/WorkflowProjects';

const WorkflowTabs = ({ activeTab }) => (
  <TabContent activeTab={activeTab}>
    <TabPane tabId="1">
      <WorkflowProjects />
    </TabPane>
    <TabPane tabId="2">
      <WorkflowDnD />
    </TabPane>
  </TabContent>
);

export default WorkflowTabs;

WorkflowTabs.propTypes = {
  activeTab: PropTypes.string
};
