const sayHello = () => console.log('Hello');
sayHello();


// const saySomething = () => ({msg: 'Hello'});
// console.log(saySomething());

const saySomething = () => console.log({msg: 'Hello'});
saySomething();


const sayHi = name => console.log(`Hi ${name}!`);
sayHi('Cory');

const sayHiAgain = (firstName, lastName) => console.log(`Hi ${firstName} ${lastName}!`);
sayHiAgain('John', 'Doe');

const users = ['Joe', 'Nathan', 'Sara', 'Tamara'];

const nameLengths = users.map(name => name.length);
console.log(nameLengths);

const nameLength = users.map(name => name.length).sort()
console.log(nameLength);
