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

export const config = { lineConfig };
