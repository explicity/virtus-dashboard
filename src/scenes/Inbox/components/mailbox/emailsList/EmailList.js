import React, { Component } from 'react';

import _map from 'lodash/map';

import InboxItem from 'scenes/Home/components/inbox/components/InboxItem';

import './emailList.scss';

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <div className="col-12 col-md-3 email-list">
      <div className="emails">
        {_map(emails, (item, index) => (
          <InboxItem
            key={item.id}
            item={item}
            Clicked={() => onSelectEmail(item.id)}
          />
        ))}
      </div>
      <div className="email-list-btn">
        <button className="btn btn-primary">
          <i className="fa fa-plus" />
          <span>New conversation</span>
        </button>
      </div>
    </div>
  );
};

export default EmailList;