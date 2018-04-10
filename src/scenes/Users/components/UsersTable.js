import React, { Component } from 'react';
import { connect } from 'react-redux';

import _map from 'lodash/map';

import UsersItem from './components/UsersItem';

import data from './data';

const UsersTable = ({ status }) => {
    let userList;

    const onlineUsers = data.filter(item => {
      if (item.activity === 'online') {
        return item;
      }
    });

    const offlineUsers = data.filter(item => {
      if (item.activity !== 'online') {
        return item;
      }
    });

    if (status === 'Active first') {
      userList = onlineUsers.concat(offlineUsers);
    } else if (status === 'Active last') {
      userList = offlineUsers.concat(onlineUsers);
    }

  return (
    <div className="table-responsive-lg">
      <table className="table table-hover users-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last Activity</th>
            <th scope="col">Company</th>
            <th scope="col">Mail</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {_map(userList, item => <UsersItem user={item} key={item.id} />)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { status } = state.sort;
  return { status };
};

export default connect(mapStateToProps)(UsersTable);