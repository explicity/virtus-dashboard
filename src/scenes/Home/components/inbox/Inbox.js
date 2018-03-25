import React from 'react';

import _map from 'lodash/map';

import InboxItem from './components/InboxItem';
import data from './components/data';

import './inbox.scss';

const Inbox = () => {
  const unreaded = data.filter(item => item.status === 'unreaded').length;
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
        {_map(data, (item, index) => <InboxItem key={index} item={item} />)}
      </div>
    </div>
  );
};

export default Inbox;
