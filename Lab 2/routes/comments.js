const server = require('../server');

exports.getComments = (req, res) => {
    const index = req.params.postId;
    res.send(server.store[index].comments);
};

exports.addComments = (req, res) => {
    const index = req.params.postId;
    const newComment = req.body.comment;
    server.store[index].comments.push(newComment);
    res.send(server.store[index].comments);
};

exports.editComments = (req, res) => {
    const postIndex = req.params.postId;
    const commentIndex = req.params.commentId;
    if (server.store[postIndex].comments.length <= commentIndex) {
        res.send('there is no comment with that ID');
        return;
    }
    const updatedComment = req.body.comment;
    server.store[postIndex].comments.splice(commentIndex, 1, updatedComment);
    res.send(server.store[postIndex].comments);
};

exports.removeComments = (req, res) => {
    const postIndex = req.params.postId;
    const commentIndex = req.params.commentId;
    if (server.store[postIndex].comments.length <= commentIndex) {
        res.send('there is no comment with that ID');
        return;
    }
    server.store[postIndex].comments.splice(commentIndex, 1);
    res.send(server.store[postIndex].comments);
};