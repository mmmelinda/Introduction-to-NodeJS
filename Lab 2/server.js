const express = require('express');
const bodyParser = require('body-parser');
//const fs = require('fs');
const path = require('path');


const app = express();
app.use(bodyParser.json());

const postController = require('./routes/posts');
const commentController = require('./routes/comments');

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');


//In-memory Store

let store = [
    {postId: 0,
    name: 'Post 1',
    url: 'https://webapplog.com/es6',
    text: 'This is the text for post 1',
    comments: ['comment 1', 'comment 2', 'comment 3']
    }
]


//Routing
app.get('/posts', postController.getPosts);

app.post('/posts', postController.addPost);

app.put('/posts/:postId', postController.updatePost);

app.delete('/posts/:postId', postController.removePost);

app.get('/posts/:postId/comments', commentController.getComments);

app.post('/posts/:postId/comments', commentController.addComments);

app.put('/posts/:postId/comments/:commentId', commentController.editComments);

app.delete('/posts/:postId/comments/:commentId', commentController.removeComments);

app.listen(3000);

exports.store = store;