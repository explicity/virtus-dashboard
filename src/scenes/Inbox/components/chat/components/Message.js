import React from 'react';

import User from './user.jpg';

import './message.scss';

const Message = ({ chat, user }) => {
  const username = JSON.parse(localStorage.getItem('userData')).username;

  const { message, time } = chat;
  const { url } = user;

  return (
    <li className={`chat ${username === chat.user ? 'right' : 'left'}`}>
      <div className="chat-main">
        <img
          src={username === chat.user ? User : url}
          style={{ width: 42, height: 42 }}
          className="chat-img"
        />
        <div>
          <div className="chat-main-message">
            <span>{message}</span>
          </div>
          <p className="chat-main-time">{time}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;