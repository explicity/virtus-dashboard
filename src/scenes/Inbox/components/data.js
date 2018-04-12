import User1 from './img/user1.png';
import User2 from './img/user2.png';
import User3 from './img/user3.png';

export default [
  {
    id: 1,
    name: 'Inbox',
    icon: 'fa-inbox',
    emails: [
      {
        id: 1,
        url: User1,
        username: 'Michelle Stewart',
        status: 'unreaded',
      },

      {
        id: 2,
        url: User2,
        username: 'Jolene Slater',
        status: 'unreaded'
      },

      {
        id: 3,
        url: User3,
        username: 'Dominic Lynton',
        status: 'readed',
      },

      {
        id: 4,
        url: User1,
        username: 'Michelle Stewart',
        status: 'readed'
      },

      {
        id: 5,
        url: User1,
        username: 'Michelle Stewart',
        status: 'readed'
      }
    ]
  },

  {
    id: 2,
    name: 'Sent',
    icon: 'fa-paper-plane',
    emails: [
      {
        id: 6,
        url: User3,
        username: 'Lyall Roach',
        status: 'readed'
      }
    ]
  },

  {
    id: 3,
    name: 'Trash',
    icon: 'fa-trash',
    emails: [
      {
        id: 7,
        url: User1,
        username: 'Michelle Stewart',
        status: 'readed'
      }
    ]
  }
];
