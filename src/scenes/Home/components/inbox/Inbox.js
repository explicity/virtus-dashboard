import React from 'react';

import _map from 'lodash/map';

import InboxItem from './components/InboxItem';
import data from './components/data';

import './inbox.scss';

const Inbox = () => {
  return (
    <div className="inner">
      <header className="inner-header">
        <h3 className="inner-title">Inbox</h3>
      </header>
      <div className="inner-item">
        {_map(data, (item, index) => <InboxItem key={index} item={item} />)}
      </div>
    </div>
  );
};

export default Inbox;
