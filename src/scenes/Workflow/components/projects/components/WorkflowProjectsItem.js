import React, { Component } from 'react';

import moment from 'moment';

import { Progress } from 'reactstrap';
import SecondaryDropdown from 'components/dropdown/secondary/SecondaryDropdown';

import './workflowProjectsItem.scss';

export default class WorkflowProjectsItem extends Component {
  render() {
    const { user } = this.props;

    let color = '#2196f3';

    if (user.progress === 0) color = 'white';
    else if (user.progress === 100) color = '#4caf50';

    const divStyle = {
      borderLeft: '2px solid',
      borderLeftColor: color
    };

    return (
      <tr className="table-item">
        <th scope="row" style={divStyle}>
          <div className="title">
            <p>{user.title}</p>
            <p className="title-secondary">{user.company}</p>
          </div>
        </th>
        <td>
          <span>${user.price}</span>
        </td>
        <td>
          <div className="deadline">
            <span>{user.deadline}</span>
            <p className="deadline-secondary">
              {moment(user.deadline).fromNow()}
            </p>
          </div>
        </td>
        <td>
          <div>
            <span>{user.progress}%</span>
            <Progress
              color={`${user.progress === 100 ? 'success' : ''}`}
              value={user.progress}
            />
          </div>
        </td>
        <td>
          <span>{user.status}</span>
        </td>
        <td>
          <div className="table-item-username">
            <a href="" className="username-logo">
              <img
                src={user.url}
                alt="user"
                style={{ width: 42, height: 42 }}
              />
            </a>
            <div>
              <a href="">{user.username}</a>
              <p className="username-secondary">{user.duties}</p>
            </div>
          </div>
        </td>
        <td>
          <SecondaryDropdown />
        </td>
      </tr>
    );
  }
}
