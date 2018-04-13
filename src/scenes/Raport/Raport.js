import React from 'react';

import RaportChart from './components/chart/RaportChart';
import RaportTable from './components/table/RaportTable';

const ChartsSection = () => (
  <div className="raport">
    <div className="wrapper">
      <RaportChart />
      <RaportTable />
    </div>
  </div>
);

export default ChartsSection;
