//const READLINE = require('readline-sync');

//let userInput = READLINE.question("Type anything and I'll repeat it back!");
//console.log(userInput);


const READLINE = require('readline-sync');
let age = READLINE.question('How old are you');

if (age >= 16) {
console.log('You can drive');
  if (age >= 18){
   console.log('You can vote');

   if (age >= 21){
     console.log('You can buy alcohol')
     if (age)
   }
  }
}
// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for

//let pennies= READLINE.question('Please enter cents as a positive integer    ')

//console.log(pennies);


// declare, assign, and print how many quarters you can make out of the pennies
//let quarters = Math.floor(pennies/25);

//console.log(quarters, 'Quarters')

//let pennies3 = Math.floor(pennies%25/10)
//console.log(dimes,'Dimes');


// declare, assign, and print how many dimes you can make out of the pennies

//let nickels = Math.floor(pennies%25%10/5);
//let pennies3 = Math.floor(pennies%5);
//console.log(nickels, 'Nickels')


//let pennies2 = Math.floor(pennies%25%10%5);
//console.log(pennies2, 'Pennies')


// declare, assign, and print how many nickels you can make out of the pennies





// declare, assign, and print how many pennies are left over

//let something = {
//quarters : undefined,
//dimes : undefined,
//nickels : undefined,
//pennies2 : undefined,
};

//something.quarters = quarters
//something.dimes = dimes
//something.nickels = nickels
//something.pennies2 = pennies2

//console.log(something, 'ChangeBox')
// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct
