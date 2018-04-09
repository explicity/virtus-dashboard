
const data = [
  {
    campaing: 'Lorem ipsum dolor sit amet tetur ',
    time: '2018-04-12',
    views: 358000,
    visitors: 58200,
    CTR: 25,
    CPC: 3.02,
    CPV: 2.51,
    CPM: 28.35,
    status: 'Active'
  },

  {
    campaing: 'Sed do eiusmod tempor ',
    time: '2018-05-12',
    views: 1200,
    visitors: 800,
    CTR: 10,
    CPC: 8.45,
    CPV: 6.13,
    CPM: 45.22,
    status: 'Disable'
  },

  {
    campaing: 'Consectetur adipisicing elit sed',
    time: '2017-06-12',
    views: 69000,
    visitors: 7300,
    CTR: 19,
    CPC: 6.22,
    CPV: 3.90,
    CPM: 37.80,
    status: 'Active'
  }
];

for (var i = 0; i < data.length; i++) {
    // data[i].views = data[i].views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // data[i].visitors = data[i].visitors.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    data[i].CPC = data[i].CPC.toFixed(2);
    data[i].CPV = data[i].CPV.toFixed(2);
    data[i].CPM = data[i].CPM.toFixed(2);
}

export default data;
