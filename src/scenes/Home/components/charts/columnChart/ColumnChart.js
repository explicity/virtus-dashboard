import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReactHighcharts from 'react-highcharts';

import MainDropdown from './../../../../../components/dropdown/MainDropdown';
import { config } from './../../../../../config/config';
import data from './data.js';

import './chartsSection.scss';

const selectOptions = {
  list: ['Year', 'Month'],
  label: 'Show'
};

class ChartsSection extends Component {
  render() {
    const { status } = this.props;
    let options = Object.assign(config.columnConfig, data.dataYear);

    if (status === 'Year') {
      options = Object.assign(config.columnConfig, data.dataYear);
    } else if (status === 'Month') {
      options = Object.assign(config.columnConfig, data.dataMonth);
    }

    return (
      <div className="charts charts-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="charts-title">Sales Report</h3>
          <MainDropdown data={selectOptions} />
        </div>
        <ReactHighcharts config={options} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { status } = state.sort;
  return { status };
};

export default connect(mapStateToProps)(ChartsSection);
