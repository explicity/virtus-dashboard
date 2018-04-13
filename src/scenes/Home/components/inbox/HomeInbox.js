import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import _map from 'lodash/map';

import data from 'scenes/Inbox/components/data';
import InboxItem from './components/InboxItem';

import './inbox.scss';

class HomeInbox extends Component {
  constructor(props) {
    super(props);

    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(id) {
    const { dispatch } = this.props;
    dispatch({
      type: 'HANDLE_MESSAGE',
      payload: {
        emailId: id
      }
    });
  }

  render() {
    const unreaded = data[0].emails.filter(item => item.status === 'unreaded')
      .length;
    return (
      <div className="inner">
        <header className="inner-header">
          <h3 className="inner-title">
            Inbox{' '}
            {unreaded !== 0 && (
              <span>
                (<span className="inner-title-unreaded">{unreaded}</span>)
              </span>
            )}
          </h3>
        </header>
        <div className="inner-item item-message">
          {_map(data[0].emails, item => (
            <Link to="/inbox" key={item.id}>
              <InboxItem
                item={item}
                Selected={() => this.handleMessage(item.id)}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default connect()(HomeInbox);

HomeInbox.propTypes = {
  dispatch: PropTypes.func,
};

