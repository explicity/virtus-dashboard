import React from 'react';
import PropTypes from 'prop-types';

import { Badge } from 'reactstrap';

import './usersItem.scss';

const UsersItem = ({ user }) => (
  <tr className="table-item user">
    <th scope="row">
      <div className="table-item-username">
        <a href=" " className="username-logo">
          <img src={user.url} alt="user" style={{ width: 42, height: 42 }} />
          {user.activity === 'online' && <Badge color="success" />}
        </a>
        <div>
          <a href=" ">{user.username}</a>
          <p className="username-secondary">{user.duties}</p>
        </div>
      </div>
    </th>
    <td
      className={`table-item-activity ${
        user.activity === 'online' ? 'active' : ''
      }`}
    >
      <i className="fa fa-clock-o fa-fw" />
      <span>{user.activity === 'online' ? 'Online now!' : user.activity}</span>
    </td>
    <td>
      <span>{user.company}</span>
    </td>
    <td>
      <span>{user.email}</span>
    </td>
    <td>
      <span>{user.phone}</span>
    </td>
  </tr>
);

export default UsersItem;

UsersItem.propTypes = {
  user: PropTypes.shape({
    url: PropTypes.string,
    activity: PropTypes.string,
    username: PropTypes.string,
    duties: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
  })
};
