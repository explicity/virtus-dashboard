const lineConfig = {
  chart: {
    type: 'areaspline',
    backgroundColor: '#2f3242'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
    gridLineWidth: 1,
    gridLineColor: '#53555E',
    lineWidth: 0,
    min: 0.5,
    max: 3.5,
    tickLength: 0,

    labels: {
      style: {
        color: '#9ca1b2',
        fontSize: '13px'
      }
    }
  },
  yAxis: {
    visible: false
  },

  tooltip: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    }
  },
  series: [
    {
      name: '',
      showInLegend: false,
      data: [3, 4, 3, 5, 4]
    }
  ]
};

const columnConfig = {
  chart: {
    type: 'column',
    backgroundColor: '#2f3242'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    crosshair: true,
    lineWidth: 0,
    tickLength: 0,

    labels: {
      style: {
        color: '#9ca1b2',
        fontSize: '14px'
      }
    }
  },
  yAxis: {
    lineWidth: 0,
    gridLineColor: '#53555E',

    labels: {
      enabled: false
    },

    title: {
      text: null
    }
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      color: '#505464',
      pointWidth: 30,

      states: {
        hover: {
          color: '#2196f3',
          borderColor: '#2196f3'
        }
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Sales',
      showInLegend: false,
      data: [
        49.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4
      ]
    }
  ]
};
export const config = { lineConfig, columnConfig };
