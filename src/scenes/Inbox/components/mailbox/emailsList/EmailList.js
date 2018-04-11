import React, { Component } from 'react';

import _map from 'lodash/map';

import InboxItem from 'scenes/Home/components/inbox/components/InboxItem';

import './emailList.scss';

const EmailList = ({ emails }) => {
  return (
    <div className="col-3 email-list">
      {_map(emails, (item, index) => <InboxItem key={item.id} item={item} />)}
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