import React, { Component } from 'react';

import InboxOptions from './components/mailbox/inboxHeader/InboxOptions';
import Mailbox from './components/mailbox/Mailbox';

import data from './components/data';

export default class Inbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mailboxId: 1
    };

    this.handleSelectMailbox = this.handleSelectMailbox.bind(this);
  }

  handleSelectMailbox(id) {
    this.setState({
      mailboxId: id
    });
  }

  render() {
    const { mailboxId } = this.state;
    const mailbox = data.filter(mailbox => mailbox.id === mailboxId)[0];
    return (
      <div>
        <InboxOptions onSelectMailbox={this.handleSelectMailbox} />
        <Mailbox key={mailbox.id} emails={mailbox.emails} />
      </div>
    );
  }
}