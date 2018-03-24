import React, { Component } from 'react';

import ReactHighcharts from 'react-highcharts';

import { config } from './../../../../../config/config';

import './chartsSection.scss';

export default class ChartsSection extends Component {
  render() {
    return (
      <div className="charts charts-column">
        <h3 className="charts-title">Sales Report</h3>
        <ReactHighcharts config={config.columnConfig} />
      </div>
    );
  }
}
