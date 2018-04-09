import React from 'react';

import moment from 'moment';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import data from './data';

import './raportTable.scss';

const RaportTable = () => (
  <div className="raport-table">
    <ReactTable
      data={data}
      columns={[
        {
          Header: 'Campaing',
          accessor: 'campaing'
        },

        {
          Header: 'Time',
          accessor: 'time',
          render: props => <span>{moment(props.value).format('MMMM DDDD YYYY')}</span>,
        },

        {
          Header: 'Views',
          accessor: 'views'
        },

        {
          Header: 'Visitors',
          accessor: 'visitors'
        },

        {
          Header: 'CTR',
          accessor: 'CTR',
          Cell: props => <span>{props.value}%</span>
        },

        {
          Header: 'CPC',
          accessor: 'CPC',
          Cell: props => <span>${props.value}</span>
        },

        {
          Header: 'CPV',
          accessor: 'CPV',
          Cell: props => <span>${props.value}</span>
        },

        {
          Header: 'CPM',
          accessor: 'CPM',
          Cell: props => <span>${props.value}</span>
        },

        {
          Header: 'Status',
          accessor: 'status',
          Cell: props => (
            <span>
              <span
                className="status"
                style={{
                  color: props.value === 'Active' ? '#4caf50' : '#f44336',
                  transition: 'all .3s ease'
                }}
              >
                &#x25cf;
              </span>{' '}
              {props.value}
            </span>
          )
        }
      ]}
      showPaginationBottom={false}
      defaultPageSize={3}
    />
  </div>
);

export default RaportTable;