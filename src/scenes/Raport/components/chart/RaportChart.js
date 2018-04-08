import React from 'react';
import { connect } from 'react-redux';

import ReactHighcharts from 'react-highcharts';
import CircularBars from 'components/bars/CircularBars';
import MainDropdown from 'components/dropdown/main/MainDropdown';

import { config } from 'config/config';
import data from './data';

import './raportChart.scss';

const selectOptions = {
  list: ['Week', 'Month'],
  label: 'Show'
};

const RaportChart = ({ status }) => {
  let options = Object.assign(data.dataWeek, config.lineSecondaryConfig);

  if (status === 'Week') {
    options = Object.assign(data.dataWeek, config.lineSecondaryConfig);
  } else if (status === 'Month') {
    options = Object.assign(data.dataMonth, config.lineSecondaryConfig);
  }

  return (
    <div className="raport-chart">
      <div className="raport-chart-header">
        <CircularBars />
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

export default connect(mapStateToProps)(RaportChart);
