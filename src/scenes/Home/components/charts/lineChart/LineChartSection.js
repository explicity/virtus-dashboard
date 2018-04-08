import React from 'react';

import ReactHighcharts from 'react-highcharts';

import { config } from 'config/config';
import CircularBars from 'components/bars/CircularBars';
import data from './data';

const options = Object.assign(data, config.lineConfig);

const ChartsSection = () => (
  <div className="charts">
    <CircularBars />
    <ReactHighcharts config={options} />
  </div>
);

export default ChartsSection;
