import React from 'react';
import { connect } from 'react-redux';

import _map from 'lodash/map';
import _sortBy from 'lodash/sortBy';
import moment from 'moment';

import InboxItem from 'scenes/Home/components/inbox/components/InboxItem';

import messagesData from '../../chat/messagesData';

import './emailList.scss';

const EmailList = ({ emails, onSelectEmail, status }) => {
  const unreaded = emails.filter(item => item.status === 'unreaded');
  const byDate = _sortBy(messagesData, (item) => {
    return  new moment(item.chat[0].time);
  });
  return (
    <div className="col-12 col-md-3 email-list">
      <div className="emails">
        {_map(emails, (item, index) => (
          <InboxItem
            key={item.id}
            item={item}
            Selected={() => onSelectEmail(item.id)}
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

const mapStateToProps = (state) => {
  const { status } = state.sort;
  return { status };
};

export default connect(mapStateToProps)(EmailList);
