import React, { Component } from 'react';

import ReactHighcharts from 'react-highcharts';

import { config } from 'config/config';
import CircularBars from 'components/bars/CircularBars';
import data from './data';

const options = Object.assign(data, config.lineConfig);

export default class ChartsSection extends Component {
  render() {
    return (
      <div className="charts">
        <CircularBars />
        <ReactHighcharts config={options} />
      </div>
    );
  }
}
