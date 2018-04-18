const request = require("request");

function fetchPosts(callback) {
  request.get(
    "http://jsonplaceholder.typicode.com/posts",
    function(error, response, body) {
      callback(body);
    }
  );
}

function fetchPostByUser(userId, callback) {
  request.get(
    `http://jsonplaceholder.typicode.com/users/${userId}/posts`,
    function(error, response, body) {
      callback(body);
    }
  );
}

function fetchPost(id, callback) {
  request.get(
    `http://jsonplaceholder.typicode.com/posts/${id}`,
    function(error, response, body) {
      callback(body);
    }
  );
}

function fetchUsers(callback) {
  request.get(
    "http://jsonplaceholder.typicode.com/users/",
    function(error, response, body) {
      callback(body);
    }
  );
}

function fetchUser(userId, callback) {
  request.get(
    `http://jsonplaceholder.typicode.com/users/${userId}`,
    function(error, response, body) {
      callback(body);
    }
  );
}

function fetchComments(callback) {
  request.get(
    "http://jsonplaceholder.typicode.com/comments",
    function(error, response, body) {
      callback(body);
    }
  );
}

function fetchCommentsByPost(postId, callback) {
  request.get(
    `http://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    function(error, response, body) {
      callback(body);
    }
  );
}

function publishComment(postId, name, email, body, callback) {
  request.post(
    "http://jsonplaceholder.typicode.com/comments",
    {form: {postId: postId, name: name, email: email, body: body}},
    function(error, response, body) {
      callback(body);
    }
  );
}

function publishPost(userId, title, body, callback) {
  request.post(
    "http://jsonplaceholder.typicode.com/posts",
    {form: {userId: userId, title: title, body: body}},
    function(error, response, body) {
      callback(body);
    }
  );
}

function updatePostTitle(postId, newTitle, callback) {
  request.patch(
    `http://jsonplaceholder.typicode.com/posts/${postId}`,
    {form: {title: newTitle}},
    function(error, response, body) {
      callback(body);
    }
  );
}

function updatePostBody(postId, newBody, callback) {
  request.patch(
    `http://jsonplaceholder.typicode.com/posts/${postId}`,
    {form: {body: newBody}},
    function(error, response, body) {
      callback(body);
    }
  );
}

function updatePost(postId, newTitle, newBody, callback) {
  request.patch(
    `http://jsonplaceholder.typicode.com/posts/${postId}`,
    {form: {title: newTitle, body: newBody}},
    function(error, response, body) {
      callback(body);
    }
  );
}

module.exports = {
  updatePost: updatePost,
  updatePostBody: updatePostBody,
  updatePostTitle: updatePostTitle,
  publishComment: publishComment,
  publishPost: publishPost,
  fetchCommentsByPost: fetchCommentsByPost,
  fetchComments: fetchComments,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchPost: fetchPost,
  fetchPostByUser: fetchPostByUser,
  fetchPosts: fetchPosts
};
