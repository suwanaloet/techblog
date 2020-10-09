const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Does this box do anything?',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'This box does do something',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Incredible!',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'debatable',
        user_id: 4,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
