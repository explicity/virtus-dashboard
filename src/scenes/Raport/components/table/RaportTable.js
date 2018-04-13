import React from 'react';
import PropTypes from 'prop-types';

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
          render: props => <span>{moment(props.value).format()}</span>,
          Cell: props => <span>{moment(props.value).format('MMMM D')}</span>,
        },

        {
          Header: 'Views',
          accessor: 'views',
          render: props => <span>{props.value}</span>,
          Cell: props => <span>{props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>,
        },

        {
          Header: 'Visitors',
          accessor: 'visitors',
          render: props => <span>{props.value}</span>,
          Cell: props => <span>{props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>,
        },

        {
          Header: 'CTR',
          accessor: 'CTR',
          Cell: props => <span>{props.value}%</span>
        },

        {
          Header: 'CPC',
          accessor: 'CPC',
          Cell: props => <span>{props.value.toFixed(2)}%</span>
        },

        {
          Header: 'CPV',
          accessor: 'CPV',
          Cell: props => <span>{props.value.toFixed(2)}%</span>
        },

        {
          Header: 'CPM',
          accessor: 'CPM',
          Cell: props => <span>{props.value.toFixed(2)}%</span>
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

RaportTable.propTypes = {
  value: PropTypes.string
};
