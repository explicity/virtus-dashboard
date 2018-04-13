import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import messagesData from 'scenes/Inbox/components/chat/messagesData';

import './inboxItem.scss';

export default class InboxItem extends Component {
  constructor(props) {
    super(props);

    this.readMessage = this.readMessage.bind(this);
  }

  readMessage() {
    const { item } = this.props;
    item.status = 'readed';

    this.props.Selected();
  }

  render() {
    const { item } = this.props;
    const messages = messagesData.filter(message => message.id === item.id)[0];
    const { chat } = messages ;
    return (
      <div className="item" onClick={this.readMessage}>
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
            <p
              className={`content-time ${
                item.status === 'unreaded' ? 'active' : ''
              }`}
            >
              {moment(chat[chat.length - 1].time).calendar()}
            </p>
          </div>
          <p className="content-info">{chat[chat.length - 1].message}</p>
        </div>
      </div>
    );
  }
}

InboxItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    url: PropTypes.string,
    username: PropTypes.string
  }),
  Selected: PropTypes.func
};
