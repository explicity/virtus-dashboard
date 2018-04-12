import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _map from 'lodash/map';
import moment from 'moment';

import Message from './messages/Message';;

import messagesData from './../../messagesData';

import './chatroom.scss';

export default class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      messages: this.props.messages.chat
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { user, messages } = nextProps;
    this.setState({
      user: user,
      messages: messages.chat
    });
  }

  componentDidMount() {
    this.scrollToBot();
  }

  componentDidUpdate() {
    this.scrollToBot();
  }

  scrollToBot() {
    let objDiv = document.getElementById('chatroomId');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  handleKeyDown(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();

      const username = JSON.parse(localStorage.getItem('userData')).username;
      this.setState(
        {
          messages: this.state.messages.concat([
            {
              user: username,
              message: ReactDOM.findDOMNode(this.refs.msg).value,
              time: moment().format('D MMMM YYYY, h:mm a')
            }
          ])
        },
        () => {
          ReactDOM.findDOMNode(this.refs.msg).value = '';
        }
      );
    }
  }

  render() {
    const { user, messages } = this.state;
    return (
      <div className="col-12 col-md-6">
        <div className="chatroom-wrapper">
          <div className="chatroom" id="chatroomId">
            <ul className="chatroom-chat">
              {_map(messages, (item, index) => (
                  <Message key={index} chat={item} user={user} />
              ))}
            </ul>
          </div>
          <form className="input">
            <input
              type="text"
              ref="msg"
              onKeyDown={this.handleKeyDown}
              placeholder="Write a message"
              className="input-chatroom"
            />
            <button type="button" className="attach-btn">
              <i className="fa fa-paperclip" />
              <span className="sr-only">Attach</span>
            </button>
            <input type="submit" value="Submit" className="sr-only" />
          </form>
        </div>
      </div>
    );
  }
}