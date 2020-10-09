const { User } = require('../models');

const userData = [
  {
    username: 'techblogger1',
    password: 'test1'
    
  },
  {
    username: 'techblogger2',
    password: 'test2'
  },
  {
    username: 'techblogger3',
    password: 'test3'
  },
  {
    username: 'techblogger4',
    password: 'test4'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;