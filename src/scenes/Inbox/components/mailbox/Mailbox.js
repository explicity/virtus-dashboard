import React, { Component } from 'react';

import EmailList from './emailsList/EmailList';
import NoneSelected from './../chat/NoneSelected';
import Chatroom from './../chat/Chatroom';

import messagesData from './../chat/messagesData';

class Mailbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: null
    };

    this.handleSelectEmail = this.handleSelectEmail.bind(this);
  }

  handleSelectEmail(id) {
    this.setState({
      emailId: id
    });
  }

  render() {
    const { emails } = this.props;
    const { emailId } = this.state;
    let mail; let messages;
    let selectedEmail;

    if (emailId) {
      mail = emails.filter(mail => mail.id === emailId)[0];
      messages = messagesData.filter(
      messages => messages.id === mail.id
    )[0];
      selectedEmail = <Chatroom id={mail.id} user={mail} messages={messages} />
    } else {
      selectedEmail = <NoneSelected />;
    }

    console.log(mail);
    return (
      <div className="d-flex">
        <EmailList emails={emails} onSelectEmail={this.handleSelectEmail} />
        {selectedEmail}
      </div>
    );
  }
}

export default Mailbox;