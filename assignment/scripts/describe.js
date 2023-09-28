// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// variable name is dane
// if your name is mary
// console will say "hi mary!"
//if not, it will say "how do you do?" and it will say this

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// variable secret set at nothing and variable code set at 123
// if code is 123, it will make the variable secrets value "super" and code variable will be multiplied by 2
// now code is 246 and is asking if code is greater than 250 and will change the value of secret to duper 
//So the code will stay at super and will console log variable secret

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// variable isStudent is set to true. variable age is set to 34. variable zip is set to 55407.
// if student is true and in a zip code greater than 80000 then it will log "You're a student on the West Coast!" which is false
// if student is false or your age is lower than 30 it will log "What are your hobbies?". 
// if student is true it will log "Welcome to Prime!". and if everything is wrong it will log "How about the weather?" but it will log welcome to prime

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - let colorOne = 'blue'; im not sure if this even mattered but it was flipped
let colorOne = 'red';
// FIX - let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  FIX - its supposed to be both colorone and colortwo made purple 
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
FIX - its not supposed to be a constant because it said 2 variables
const time = 4;

FIX - its supposed to be && and not || because it has to be both
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
FIX - again it said 2 variables
const minAge = 21;

FIX - that is not the greater than sign and also the "no entry" and "enter" are swapped
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

