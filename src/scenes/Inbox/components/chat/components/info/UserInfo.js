import React, { Component } from 'react';

import { Badge } from 'reactstrap';

import data from 'scenes/Users/components/data';

import './userInfo.scss';

const UserInfo = ({ user }) => {
  const info = data.filter(item => item.username === user.username)[0];
  return (
    <div className="col-12 col-md-3 p-0">
      <div className="chat-info">
        <div className="info">
          <div className="info-image">
            <img
              src={info.url}
              alt="user"
              style={{ width: 80, height: 80 }}
              className="user-img"
            />
            {info.activity === 'online' && <Badge color="success" />}
          </div>
          <div className="user-main">
            <h3>{info.username}</h3>
            <p>{info.duties}</p>
          </div>
          <p className="mb-4">{info.secondary}</p>
          <ul>
            <li className="chat-info-item">
              <p>Email</p>
              <p className="item-option">{info.email}</p>
            </li>
            <li className="chat-info-item">
              <p>Phone</p>
              <p className="item-option">{info.phone}</p>
            </li>
            <li className="chat-info-item">
              <p>Adress</p>
              <p className="item-option">{info.adress}</p>
            </li>
            <li className="chat-info-item">
              <p>Company</p>
              <p className="item-option">{info.company}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
