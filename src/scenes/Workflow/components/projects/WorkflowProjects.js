import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _map from 'lodash/map';

import WorkflowProjectsItem from './components/WorkflowProjectsItem';

import data from '../data';

import './workflowProjects.scss';

const WorkflowProjects = ({ status }) => (
  <div className="dark-bg">
    <div className="container">
      <div className="table-responsive-lg">
        <table className="table table-hover users-table">
          <thead>
            <tr>
              <th scope="col">Project title</th>
              <th scope="col">Value</th>
              <th scope="col">Deadline</th>
              <th scope="col">Time spent</th>
              <th scope="col">Progress</th>
              <th scope="col">Status</th>
              <th scope="col">Assigned to</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {_map(
              data,
              (item, index) =>
                (item.company === status || status === 'All') && (
                  <WorkflowProjectsItem key={index} user={item} />
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  const { status } = state.sort;
  return { status };
};

export default connect(mapStateToProps)(WorkflowProjects);

WorkflowProjects.propTypes = {
  status: PropTypes.string
};
