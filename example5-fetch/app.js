document.getElementById('text-btn').addEventListener('click', getText);
document.getElementById('json-btn').addEventListener('click', getJSON);
document.getElementById('api-btn').addEventListener('click', getAPIData);



// Get local text file
function getText() {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));
}


// Get local JSON data
function getJSON() {
    fetch('test.json')
    .then(res => res.json())
    .then(data => {
        let output = ``
        data.forEach(item => {
            output += 
            `
                <ul>
                    <li>Post Title: ${item.title}</li>
                    <li>Post Body: ${item.body}</li>
                </ul>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


// Get some data from a remote API
function getAPIData() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        let output = ``
        data.forEach(user => {
            output += 
            `
                <ul>
                    <li>${user.login}</li>
                </ul>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

