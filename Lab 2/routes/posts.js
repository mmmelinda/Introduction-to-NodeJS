const server = require('../server');

module.exports = {
    getPosts(req, res) {      
      res.send(server.store)
    },

    addPost(req, res) {
      const newPost = {
        postId: server.store.length,
        name: req.body.name,
        url: req.body.url,
        text: req.body.text,
        comments: []
      }
      server.store.push(newPost);
      res.send(server.store);
    },

    updatePost(req, res) {
      const index = req.params.postId;
      if (server.store.length <= index) {
        res.send('there is no post with that ID');
        return;
      }
      //the Id and the comments cannot be modified
      const updatedPost = {
        postId: server.store[index].postId,
        name: req.body.name || server.store[index].name,
        url: req.body.url || server.store[index].url,
        text: req.body.text || server.store[index].text, 
        comments: server.store[index].comments      
      }
      server.store[index] = updatedPost;
      res.send(server.store);
    },

    removePost(req, res) {
      const index = req.params.postId;
      if (server.store.length <= index) {
        res.send('there is no post with that ID');
        return;
      }
      server.store.splice(index, 1);
      res.send(server.store);
    }
  }