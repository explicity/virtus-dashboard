import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import options from './options';

import './raportTable.scss';

const RaportTable = () => (
  <div className="raport-table">
    <ReactTable
      data={options.data}
      columns={options.columns}
      showPaginationBottom={false}
      defaultPageSize={3}
    />
  </div>
);

export default RaportTable;
