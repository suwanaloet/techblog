const { Post } = require('../models');

//nytimes tech filler
const postData = [
  {
    title: 'House Lawmakers Condemn Big Tech’s ‘Monopoly Power’ and Urge Their Breakups',
    body: 'In a report led by Democrats, lawmakers said Apple, Amazon, Google and Facebook needed to be checked and recommended they be restructured and that antitrust laws be reformed.',
    user_id: 1
    
  },
  {
    title: '12 Accusations in the Damning House Report on Amazon, Apple, Facebook and Google',
    body: 'Lawmakers said they found multiple problems with each of the four giant tech companies.',
    user_id: 2
  },
  {
    title: 'How Did ‘Ransomware’ Get So Bad?',
    body: 'Hackers are freezing information and demanding ransom. Who is behind this, and what can be done?',
    user_id: 3
  },
  {
    title: 'Tech Isn’t the Answer for Test Taking',
    body: 'Taking tests remotely is a problem. That doesn’t mean technology is the solution.',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;