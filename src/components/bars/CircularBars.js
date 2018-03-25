import React, { Component } from 'react';

import _map from 'lodash/map';

import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

import data from './data';

import './circularBars.scss';

const ProgressBarsItem = ({ info }) => (
  <div className="progressbars">
    <div className="progressbars-item">
      <CircularProgressbar
        percentage={info.percentages}
        className="progressbars-item-color"
        strokeWidth="6"
      />
    </div>
    <div className="description">
      <p>{info.description.first}</p>
      <p>{info.description.second}</p>
    </div>
  </div>
);

const ProgressBars = () => (
  <div className="bars">
    {_map(data, (item, index) => <ProgressBarsItem key={index} info={item} />)}
  </div>
);

export default ProgressBars;
