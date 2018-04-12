import React, { Component } from 'react';

import { connect } from 'react-redux';

import EmailList from './emailsList/EmailList';
import NoneSelected from './../chat/NoneSelected';
import Chat from './../chat/Chat';

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

  componentWillMount() {
    const { emailId } = this.state;
    const { openEmail } = this.props;
    if (emailId !== openEmail) {
      this.setState({
        emailId: openEmail
      })
    }
  }

  render() {
    const { emails, openEmail } = this.props;
    const { emailId } = this.state;
    let mail; let messages;
    let selectedEmail;
    console.log(openEmail);

    if (emailId) {
      mail = emails.filter(mail => mail.id === emailId)[0];
      messages = messagesData.filter(
      messages => messages.id === mail.id
    )[0];
      selectedEmail = <Chat id={mail.id} user={mail} messages={messages} />
    } else {
      selectedEmail = <NoneSelected />;
    }

    return (
      <div className="d-flex">
        <EmailList emails={emails} onSelectEmail={this.handleSelectEmail} />
        {selectedEmail}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { openEmail } = state.direction;
  return { openEmail };
}

export default connect(mapStateToProps)(Mailbox);