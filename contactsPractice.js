let wolf = {name:'Coach Wolf',
number:'555 555 5551',
email:'wolf@csedge.org'}

let zakiya = {name: 'Coach Zakiya',
number: '555 555 5552',
email: 'zakiya@csedge.org'}

let caryn = {name:'Coach Caryn',
number: '555 555 5553',
email:'caryn@csedge.org'}

let chike = {name:'Coach Chike',
number: '555 555 5554',
email:'chike@csedge.org'}

let maria = {name:'Coach Maria',
number:'555 555 5555',
email:'maria@csedge.org'}

let contacts = [wolf, zakiya, caryn, chike, maria];

// console.log(contacts[0]);
// console.log(contacts[1]);
// console.log(contacts[2]);
// console.log(contacts[3]);
// console.log(contacts[4]);

// change all numbers to 000 000 0000 if
// the name is Coach Zakiya or Coach Maria
for(let i = 0; i<contacts.length; i++){
if (contacts[i].name === 'Coach Maria'|| contacts[i].name === 'Coach Zakiya'){
  contacts[i].number = '000 000 0000'

}
console.log(contacts[i])
}
