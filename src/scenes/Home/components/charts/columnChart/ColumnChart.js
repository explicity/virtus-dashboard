import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ReactHighcharts from 'react-highcharts';

import MainDropdown from 'components/dropdown/main/MainDropdown';
import { config } from 'config/config';
import data from './data.js';

import './chartsSection.scss';

const selectOptions = {
  list: ['Year', 'Month'],
  label: 'Show'
};

const ChartsSection = ({ status }) => {
  let options = Object.assign(config.columnConfig, data.dataYear);

  if (status === 'Year') {
    options = Object.assign(config.columnConfig, data.dataYear);
  } else if (status === 'Month') {
    options = Object.assign(config.columnConfig, data.dataMonth);
  }
  return (
    <div className="charts charts-column">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="inner-title">Sales Report</h3>
        <MainDropdown data={selectOptions} />
      </div>
      <ReactHighcharts config={options} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { status } = state.sort;
  return { status };
};

export default connect(mapStateToProps)(ChartsSection);

ChartsSection.propTypes = {
  status: PropTypes.string
};
