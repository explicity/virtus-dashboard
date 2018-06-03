import moment from 'moment';

import User from './img/user.jpg';
import User2 from './img/user2.png';
import User3 from './img/user3.png';
import User4 from './img/user4.png';

const user = JSON.parse(localStorage.getItem('userData'));

export default [
  {
    id: 0,
    title: 'Wordpress Theme',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Stewart',
    status: 'Quened',
    duties: 'Account',
    progress: 100,
    deadline: moment('2018-06-12').format('D MMMM YYYY'),
    spent: '40 hours'
  },

  {
    id: 1,
    title: 'Landing Page',
    company: 'Facebook',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Planning',
    duties: 'Account',
    progress: 0,
    deadline: moment('2018-06-09').format('D MMMM YYYY'),
    spent: '0 hours'
  },

  {
    id: 2,
    title: 'New Website',
    company: 'Symu.co',
    price: 1500,
    url: User3,
    username: 'Lyall Roach',
    status: 'Planning',
    duties: 'Front End Dev',
    progress: 70,
    deadline: moment('2018-08-08').format('D MMMM YYYY'),
    spent: '70 hours'
  },

  {
    id: 3,
    title: 'Mobile App',
    company: 'Symu.co',
    price: 1500,
    url: User,
    username: user ? user.username : '',
    status: 'Planning',
    progress: 15,
    deadline: moment('2018-06-01').format('D MMMM YYYY'),
    spent: '15 hours',
    email: user ? user.email : ''
  },

  {
    id: 4,
    title: 'New Logo',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Design',
    duties: 'Account',
    progress: 90,
    deadline: moment('2018-04-22').format('D MMMM YYYY'),
    spent: '60 hours'
  },

  {
    id: 5,
    title: 'New website',
    company: 'Facebook',
    price: 1500,
    url: User,
    username: user ? user.username : '',
    status: 'Design',
    progress: 40,
    deadline: moment('2018-09-30').format('D MMMM YYYY'),
    spent: '52 hours',
    email: user ? user.email : ''
  },

  {
    id: 6,
    title: 'New website',
    company: 'Google',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Design',
    duties: 'Account',
    progress: 100,
    deadline: moment('2018-06-12').format('D MMMM YYYY'),
    spent: '23 hours'
  },

  {
    id: 7,
    title: 'Dashboard',
    company: 'Facebook',
    price: 1500,
    url: User,
    username: user ? user.username : '',
    status: 'Design',
    progress: 0,
    deadline: moment('2018-07-03').format('D MMMM YYYY'),
    spent: '0 hours',
    email: user ? user.email : ''
  },

  {
    id: 8,
    title: 'Mobile App',
    company: 'Symu.co',
    price: 1500,
    url: User3,
    username: 'Lyann Roach',
    status: 'Development',
    duties: 'Front End Dev',
    progress: 30,
    deadline: moment('2018-08-11').format('D MMMM YYYY'),
    spent: '40 hours'
  },

  {
    id: 9,
    title: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Development',
    duties: 'Account',
    progress: 45,
    deadline: moment('2018-12-01').format('D MMMM YYYY'),
    spent: '12 hours'
  },

  {
    id: 10,
    title: 'Dashboard',
    company: 'Google',
    price: 1500,
    url: User3,
    username: 'Lyann Roach',
    status: 'Development',
    duties: 'Front End Dev',
    progress: 0,
    deadline: moment('2018-05-27').format('D MMMM YYYY'),
    spent: '0 hours'
  },

  {
    id: 11,
    title: 'Landing page',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Testing',
    duties: 'Account',
    progress: 90,
    deadline: moment('2018-06-29').format('D MMMM YYYY'),
    spent: '120 hours'
  },

  {
    id: 12,
    title: 'Landing page',
    company: 'Symu.co',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Completed',
    duties: 'Account',
    progress: 45,
    deadline: moment('2018-04-12').format('D MMMM YYYY'),
    spent: '4 hours'
  },

  {
    id: 13,
    title: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: User3,
    username: 'Lyann Roach',
    status: 'Completed',
    duties: 'Front End Dev',
    progress: 60,
    deadline: moment('2018-07-31').format('D MMMM YYYY'),
    spent: '42 hours'
  },

  {
    id: 14,
    title: 'Dashboard',
    company: 'Google',
    price: 1500,
    url: User2,
    username: 'Michelle Steward',
    status: 'Completed',
    duties: 'Account',
    progress: 100,
    deadline: moment('2018-06-05').format('D MMMM YYYY'),
    spent: '140 hours'
  },

  {
    id: 15,
    title: 'Dashboard',
    company: 'Google',
    price: 1500,
    url: User4,
    username: 'Lyall Roach',
    status: 'Quened',
    duties: 'UX/UI Designer',
    progress: 25,
    deadline: moment('2018-05-05').format('D MMMM YYYY'),
    spent: '140 hours'
  },
  {
    id: 16,
    title: 'New App',
    company: 'Google',
    price: 1500,
    url: User,
    username: user ? user.username : '',
    status: 'Testing',
    progress: 0,
    deadline: moment('2018-07-03').format('D MMMM YYYY'),
    spent: '0 hours',
    email: user ? user.email : ''
  },
  {
    id: 17,
    title: 'Dashboard',
    company: 'Facebook',
    price: 1500,
    url: User,
    username: user ? user.username : '',
    status: 'Completed',
    progress: 0,
    deadline: moment('2018-07-03').format('D MMMM YYYY'),
    spent: '0 hours',
    email: user ? user.email : ''
  },
  {
    id: 18,
    title: 'Mobile Application',
    company: 'Symu.co',
    price: 1500,
    url: User,
    username: user ? user.username : '',
    status: 'Testing',
    progress: 0,
    deadline: moment('2018-07-03').format('D MMMM YYYY'),
    spent: '0 hours',
    email: user ? user.email : ''
  }
];
