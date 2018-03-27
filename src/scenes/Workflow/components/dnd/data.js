import User from './img/user.jpg';
import User2 from './img/user2.png';
import User3 from './img/user3.png';
import User4 from './img/user4.png';

let user = JSON.parse(localStorage.getItem('userData'));

export default [
  {
    id: 0,
    title: 'Wordpress Theme',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Stewart',
    status: 'Quened'
  },

  {
    id: 1,
    title: 'Landing Page',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Planning'
  },

  {
    id: 2,
    title: 'New Website',
    company: 'Symu.co',
    price: 1500,
    url: User3,
    username: 'Lyall Roach',
    status: 'Planning'
  },

  {
    id: 3,
    title: 'Mobile App',
    company: 'Symu.co',
    price: 1500,
    url: User,
    username: user.username,
    status: 'Planning'
  },

  {
    id: 4,
    title: 'New Logo',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Design'
  },

  {
    id: 5,
    title: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: User,
    username: user.username,
    status: 'Design'
  },

  {
    id: 6,
    title: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Design'
  },

  {
    id: 7,
    title: 'Dashboard',
    company: 'Symu.co',
    price: 1500,
    url: User,
    username: user.username,
    status: 'Design'
  },

  {
    id: 8,
    title: 'Mobile App',
    company: 'Symu.co',
    price: 1500,
    url: User3,
    username: 'Lyann Roach',
    status: 'Development'
  },

  {
    id: 9,
    title: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Development'
  },

  {
    id: 10,
    title: 'Dashboard',
    company: 'Symu.co',
    price: 1500,
    url: User3,
    username: 'Lyann Roach',
    status: 'Development'
  },

  {
    id: 11,
    title: 'Landing page',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Testing'
  },

  {
    id: 12,
    title: 'Landing page',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Completed'
  },

  {
    id: 13,
    title: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: User3,
    username: 'Lyann Roach',
    status: 'Completed'
  },

  {
    id: 14,
    title: 'Dashboard',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Completed'
  }
];
