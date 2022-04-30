'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 < 1996) {
      var millenial = true;
      //Creating New variable with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';
    }
    // console.log(str);
    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3));// not available in strict mode from here
  }
  printAge();
  return age;
}

const firstName = 'Zidane';
calcAge(1991);


// console.log(age);
// printAge();
*/

// Hoisting and TDZ in practice

// Variables
console.log(me);

// console.log(job);

// console.log(year);

var me = 'Zidane';
let job = 'developer';
const year = '2001';

// Functions

console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));

console.log(addArrow);

// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);
