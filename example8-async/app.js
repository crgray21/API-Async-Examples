// async makes the function return a promise
// async function hello() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = false;
//     if (!error) {
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// hello()
// .then(res => console.log(res))
// .catch(err => console.log(err));



// async function getUsers() {
//     // await response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     // only proceed once fetch promise is resolved
//     const data = await response.json();

//     // only proceed once response.json() promise is resolved
//     return data;
// }

// getUsers().then(users => console.log(users));


const http = new EasyHTTP;

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

http.get('https://jsonplaceholder.typicode.com/users')
.then(users => console.log(users))
.catch(err => console.log(err));

http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));