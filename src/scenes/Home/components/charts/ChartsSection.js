import React, { Component } from 'react';

import ReactHighcharts from 'react-highcharts';

import { config } from './../../../../config/config';
import CircularBars from '././../../../../components/bars/CircularBars';

import './chartsSection.scss';

export default class ChartsSection extends Component {
  render() {
    return (
      <div className="charts">
        <CircularBars />
        <ReactHighcharts config={config.lineConfig} />
      </div>
    );
  }
}
