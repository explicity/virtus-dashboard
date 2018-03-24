import React, { Component } from 'react';

import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import './calendar.scss';

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <DayPicker showOutsideDays />
      </div>
    );
  }
}
