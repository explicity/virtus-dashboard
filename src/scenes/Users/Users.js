import React, { Component } from 'react';
import { connect } from 'react-redux';

import UsersTable from './components/UsersTable';
import MainDropdown from 'components/dropdown/main/MainDropdown';

import data from './components/data';

import './users.scss';

const selectOptions = {
  list: ['Active first', 'Active last'],
  label: 'Sort'
};

class Users extends Component {
  render() {
    const { status } = this.props;

    return (
      <div className="users">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header-title">
              All users <span className="secondary">({data.length})</span>
            </h2>
            <MainDropdown data={selectOptions} />
          </div>
          <UsersTable />
        </div>
      </div>
    );
  }
}

export default Users;