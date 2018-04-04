import React, { Component } from 'react';

import RaportChart from './components/chart/RaportChart';
import RaportTable from './components/table/RaportTable';

export default class ChartsSection extends Component {
  render() {
    return (
      <div className="raport">
        <div className="wrapper">
          <RaportChart />
          <RaportTable />
        </div>
      </div>
    );
  }
}
