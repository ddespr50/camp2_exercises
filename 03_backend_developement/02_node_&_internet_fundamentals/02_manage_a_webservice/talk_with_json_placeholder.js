const request = require("request");

//fetchPosts(callback) : that fetch the list of each blogposts
function fetchPosts(callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}

//fetchPosts();

//fetchPostByUser(userId, callback) : that fetch the list of each blogposts by userId
function fetchPostByUser(userId, callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts?userId=" + userId,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}



//fetchPost(id, callback) : that fetch a post by his id
function fetchPost(id, callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts/" + id,
      // `http://jsonplaceholder.typicode.com/posts/${id}`
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}


module.exports={
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers
};

//fetchUsers(callback) that fetch the list of each users

function fetchUsers(callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}

//fetchUser(userId, callback) that fetch an user by his id
function fetchUser(userId, callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/users/" + userId,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}

//fetchComments(callback) that fetch the list of each comments
function fetchComments(callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments/",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}

//fetchCommentsByPost(postId, callback) that fetch the list of each comments on a specific post
function fetchCommentsByPost(postId, callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments?postId" + postId,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      console.log("result:", result); // Print the HTML for the Google homepage.
    }
  );
}

module.exports={
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost
};



// correction
// const request = require("request");
//
// function fetchPosts(callback) {
//   request.get(
//     "http://jsonplaceholder.typicode.com/posts",
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function fetchPostByUser(userId, callback) {
//   request.get(
//     `http://jsonplaceholder.typicode.com/users/${userId}/posts`,
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function fetchPost(id, callback) {
//   request.get(
//     `http://jsonplaceholder.typicode.com/posts/${id}`,
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function fetchUsers(callback) {
//   request.get(
//     "http://jsonplaceholder.typicode.com/users/",
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function fetchUser(userId, callback) {
//   request.get(
//     `http://jsonplaceholder.typicode.com/users/${userId}`,
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function fetchComments(callback) {
//   request.get(
//     "http://jsonplaceholder.typicode.com/comments",
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function fetchCommentsByPost(postId, callback) {
//   request.get(
//     `http://jsonplaceholder.typicode.com/posts/${postId}/comments`,
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function publishComment(postId, name, email, body, callback) {
//   request.post(
//     "http://jsonplaceholder.typicode.com/comments",
//     {form: {postId: postId, name: name, email: email, body: body}},
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function publishPost(userId, title, body, callback) {
//   request.post(
//     "http://jsonplaceholder.typicode.com/posts",
//     {form: {userId: userId, title: title, body: body}},
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function updatePostTitle(postId, newTitle, callback) {
//   request.patch(
//     `http://jsonplaceholder.typicode.com/posts/${postId}`,
//     {form: {title: newTitle}},
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function updatePostBody(postId, newBody, callback) {
//   request.patch(
//     `http://jsonplaceholder.typicode.com/posts/${postId}`,
//     {form: {body: newBody}},
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// function updatePost(postId, newTitle, newBody, callback) {
//   request.patch(
//     `http://jsonplaceholder.typicode.com/posts/${postId}`,
//     {form: {title: newTitle, body: newBody}},
//     function(error, response, body) {
//       callback(body);
//     }
//   );
// }
//
// module.exports = {
//   updatePost: updatePost,
//   updatePostBody: updatePostBody,
//   updatePostTitle: updatePostTitle,
//   publishComment: publishComment,
//   publishPost: publishPost,
//   fetchCommentsByPost: fetchCommentsByPost,
//   fetchComments: fetchComments,
//   fetchUsers: fetchUsers,
//   fetchUser: fetchUser,
//   fetchPost: fetchPost,
//   fetchPostByUser: fetchPostByUser,
//   fetchPosts: fetchPosts
// };
