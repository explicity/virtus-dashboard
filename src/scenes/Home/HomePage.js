import React from 'react';

import LineChartSection from './components/charts/lineChart/LineChartSection';
import ColumnChart from './components/charts/columnChart/ColumnChart';
import Calendar from './components/calendar/Calendar';
import Inbox from './components/inbox/Inbox';
import Projects from './components/projects/Projects';

const HomePage = () => (
  <div className="container">
    <div className="mt-4">
      <div className="row mb-4">
        <div className="col-12 col-md-8">
          <LineChartSection />
        </div>
        <div className="col-12 col-md-4">
          <Projects />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-5 mb-4">
          <ColumnChart />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Inbox />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Calendar />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
