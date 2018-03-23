import React, { Component } from 'react';

import ChartsSection from './components/charts/ChartsSection';

export default class HomePage extends Component {
  render() {
    return (
      <div className="mt-3">
        <div className="row">
          <div className="col-8">
            <ChartsSection />
          </div>
        </div>
      </div>
    );
  }
}
