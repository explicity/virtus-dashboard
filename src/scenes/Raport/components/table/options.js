const data = [
  {
    campaing: 'Lorem ipsum dolor sit amet tetur ',
    time: '6 days',
    views: 358000,
    visitors: 58200,
    CTR: '25%',
    CPC: '$3.02',
    CPV: '$2.51',
    CPM: '$28.35',
    status: 'Active'
  },

  {
    campaing: 'Sed do eiusmod tempor ',
    time: '7 hours',
    views: 1200,
    visitors: 800,
    CTR: '10%',
    CPC: '$8.45',
    CPV: '$6.13',
    CPM: '$45.22',
    status: 'Disable'
  },

  {
    campaing: 'Consectetur adipisicing elit sed',
    time: '3 days',
    views: 69000,
    visitors: 7300,
    CTR: '19%',
    CPC: '$6.22',
    CPV: '$3.90',
    CPM: '$37.80',
    status: 'Active'
  }
];

const columns = [
  {
    Header: 'Campaing',
    accessor: 'campaing'
  },

  {
    Header: 'Time',
    accessor: 'time'
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
    accessor: 'CTR'
  },

  {
    Header: 'CPC',
    accessor: 'CPC'
  },

  {
    Header: 'CPV',
    accessor: 'CPV'
  },

  {
    Header: 'CPM',
    accessor: 'CPM'
  },

  {
    Header: 'Status',
    accessor: 'status'
  }
];

const options = { data, columns };
export default options;
