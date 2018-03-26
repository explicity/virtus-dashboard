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
  }
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
      pointWidth: 25,

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
  }
};
export const config = { lineConfig, columnConfig };
