import React, { Component } from 'react';

import EmailList from './emailsList/EmailList';

const Mailbox = ({ emails }) => {
  return (
    <EmailList emails={emails} />
  )
}

export default Mailbox;
