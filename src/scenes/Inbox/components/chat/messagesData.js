import moment from 'moment';

const user = JSON.parse(localStorage.getItem('userData'));

export default [
  {
    id: 1,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      },

      {
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      },

      {
        user: user.username,
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      },

      {
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      },

      {
        user: user.username,
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        time: moment('20180412').format('D MMMM YYYY, h:mm a')
      }
    ]
  },

  {
    id: 2,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      }
    ]
  },

  {
    id: 3,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      },

      {
        message: 'bebe',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      },

      {
        user: user.username,
        message: 'well',
        time: moment('20180412').format('D MMMM YYYY, h:mm a')
      }
    ]
  },

  {
    id: 4,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      }
    ]
  },
  {
    id: 5,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      }
    ]
  },

  {
    id: 6,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      }
    ]
  },

  {
    id: 7,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: moment('20180411').format('D MMMM YYYY, h:mm a')
      }
    ]
  }
];