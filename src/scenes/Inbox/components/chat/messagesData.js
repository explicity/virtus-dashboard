import moment from 'moment';

const user = JSON.parse(localStorage.getItem('userData'));

export default [
  {
    id: 1,
    chat: [
      {
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.',
        time: moment()
          .subtract(1, 'days')
          .calendar()
      },

      {
        user: user.username,
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        time: moment()
          .subtract(1, 'days')
          .calendar()
      },

      {
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.',
        time: moment()
          .subtract(1, 'days')
          .calendar()
      },

      {
        user: user.username,
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        time: moment()
          .subtract(1, 'days')
          .calendar()
      }
    ]
  },

  {
    id: 3,
    chat: [
      {
        message: 'bebe',
        time: moment()
          .subtract(1, 'days')
          .calendar()
      },

      {
        user: user.username,
        message: 'well',
        time: moment()
          .subtract(1, 'days')
          .calendar()
      }
    ]
  }
];