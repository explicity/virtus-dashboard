const user = JSON.parse(localStorage.getItem('userData'));

export default [
  {
    id: 1,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: '20180411'
      },

      {
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.',
        time: '20180412'
      },

      {
        user: user.username,
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        time: '20180412'
      },

      {
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.',
        time: '20180412'
      },

      {
        user: user.username,
        message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        time: '20180412'
      }
    ]
  },

  {
    id: 2,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: '20180410'
      }
    ]
  },

  {
    id: 3,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: '20180411'
      },

      {
        message: 'Lorem ipsum',
        time: '20180411'
      },

      {
        user: user.username,
        message: 'Lorem ipsum dolor sit amet',
        time: '20180413'
      }
    ]
  },

  {
    id: 4,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: '20180411'
      }
    ]
  },
  {
    id: 5,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: '20180412'
      }
    ]
  },

  {
    id: 6,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: '20180410'
      }
    ]
  },

  {
    id: 7,
    chat: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        time: '20180409'
      }
    ]
  }
];
