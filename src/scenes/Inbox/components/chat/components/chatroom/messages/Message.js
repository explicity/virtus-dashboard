import React from 'react';

import moment from 'moment';

import User from './user.jpg';

import './message.scss';

const Message = ({ chat, user }) => {
  const { username } = JSON.parse(localStorage.getItem('userData'));

  const { message, time } = chat;
  const { url } = user;

  return (
    <li className={`chat ${username === chat.user ? 'right' : 'left'}`}>
      <div className="chat-main">
        <img alt="chat-user"
          src={username === chat.user ? User : url}
          style={{ width: 42, height: 42 }}
          className="chat-img"
        />
        <div>
          <div className="chat-main-message">
            <span>{message}</span>
          </div>
          <p className="chat-main-time">{moment(time).format('D MMMM YYYY, h:mm a')}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;
