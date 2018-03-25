import React, { Component } from 'react';

import './inbox-item.scss';

const InboxItem = ({ item }) => {
  return (
    <a href="" className="item">
      <div className="mr-3">
        <img
          src={item.url}
          alt="user"
          style={{ width: 42, height: 42 }}
          className="item-img"
        />
      </div>
      <div className="content">
        <div className="mb-2">
          <span className="content-user">{item.username}</span>
          <p className="content-time">{item.time}</p>
        </div>
        <p className="content-info">{item.message}</p>
      </div>
    </a>
  );
};

export default InboxItem;
