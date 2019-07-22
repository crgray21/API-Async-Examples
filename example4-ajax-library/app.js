//Instantiate our prototype defined in http-lib.js
const http = new easyHTTP;

// Create some data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

// GET some posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });


// GET a single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


// POST a new post
// Make the post request
// http.post('https://jsonplaceholder.typicode.com/posts', data, 
// function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


// UPDATE a post using PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, 
// function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


// DELETE a post
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

