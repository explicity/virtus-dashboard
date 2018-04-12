import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import messagesData from 'scenes/Inbox/components/chat/messagesData';

import './inbox-item.scss';

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
    const { chat } = messages;
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
              {chat[0].time}
            </p>
          </div>
          <p className="content-info">{chat[chat.length - 1].message}</p>
        </div>
      </div>
    );
  }
}
