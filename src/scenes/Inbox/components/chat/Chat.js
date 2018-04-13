import React from 'react';

import Chatroom from './components/chatroom/Chatroom';
import UserInfo from './components/info/UserInfo';

const Chat = ({ user, messages }) => [
  <Chatroom key={1} user={user} messages={messages} />,
  <UserInfo key={2} user={user} />
];

export default Chat;
