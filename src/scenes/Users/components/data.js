import moment from 'moment';

import User1 from './img/User1.png';
import User2 from './img/User2.png';
import User3 from './img/User3.png';
import User4 from './img/User4.png';
import User5 from './img/User5.png';

export default [
  {
    id: 0,
    username: 'Dominic Lynton',
    url: User1,
    duties: 'Front End Dev',
    email: 'nickyhunt@design.com',
    phone: '+48 500 400 300',
    company: 'Symu.co',
    activity: 'online'
  },

  {
    id: 1,
    username: 'Michelle Stewart',
    url: User2,
    duties: 'Account',
    email: 'johndoe@design.com',
    phone: '+48 500 400 300',
    company: 'Google',
    activity: 'online'
  },

  {
    id: 2,
    username: 'Lyall Roach',
    url: User3,
    duties: 'UX/UI Designer',
    email: 'lyallroach@gmail.com',
    phone: '+48 500 400 300',
    company: 'Symu.co',
    activity: moment()
      .startOf('hour')
      .fromNow()
  },

  {
    id: 3,
    username: 'Jolene Slater',
    url: User4,
    duties: 'Front End Dev',
    email: 'jokeneslater@design.com',
    phone: '+48 500 400 300',
    company: 'Facebook',
    activity: moment()
      .startOf('day')
      .fromNow()
  },

  {
    id: 4,
    username: 'Patric Smith',
    url: User5,
    duties: 'Project Manager',
    email: 'patricksmith@design.com',
    phone: '+48 500 400 300',
    company: 'Facebook',
    activity: moment('20170620', 'YYYYMMDD').fromNow()
  }
];