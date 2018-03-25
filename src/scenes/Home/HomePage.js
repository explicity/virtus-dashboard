import React, { Component } from 'react';

import LineChartSection from './components/charts/lineChart/LineChartSection';
import ColumnChart from './components/charts/columnChart/ColumnChart';
import Calendar from './components/calendar/Calendar';

export default class HomePage extends Component {
  render() {
    return (
      <div className="mt-4">
        <div className="row">
          <div className="col-8 mb-4">
            <LineChartSection />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ColumnChart />
          </div>
          <div className="col-3">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}
