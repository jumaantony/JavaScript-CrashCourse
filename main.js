// this is a comment in JS
console.log('hello juma')
    // alert('hEYY THERE')


// variables

var b = 'smoothie'
console.log(b);

var someNumber = 45;
console.log(someNumber);


// prompting a user for an input
//var age = prompt('What is your Age')

// Changing the contents of an HTML - Manipulating Dom
//document.getElementById('someText').innerHTML = age;

//Numbers

var num1 = 5.7;

// increment

num1++;
num1 += 10;

//decrement

num1--;
num1 -= 10;


// Functions
// 1. create a function
// 2. call a function

/* function fun() {
var name = prompt('what is your name');
var result = 'Hello ' + name;
console.log(result)
}; */

// fun();

// how arguments work with functions

function addNumbers(num, numm) {
    var addtion = num + numm;
    console.log(addtion)
};

addNumbers(12, 13);

// While loops

var num3 = 0;

while (num3 < 10) {
    num3 += 1;
    //console.log(num3);
};

// for loop
for (let num = 0; num <= 5; num++) {
    //console.log(num)
}

// data types
let yourAge = 10; // number
let yourName = 'Juma'; //string
let name = { first: 'Anton', last: 'Juma' } // Object
let truth = false //boolean
let groceries = ['bananas', 'mangoes'] // arrays
let random; //undefined
let nothing = null; // value null

// Common methods used in strings
let fruit = 'banana';
let moreFruits = 'bananas\apples' // newline

console.log(fruit.length);
console.log(fruit.indexOf('a'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '124'));
console.log(fruit.toLocaleLowerCase(fruit));
console.log(fruit.toLocaleUpperCase(fruit));
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by character

// Arrays
let fruits = ['bananas', 'mangoes', 'apples'];
fruits = new Array('bananas', 'mangoes', 'apples');

console.log(fruits[2]); //access value at index 2

fruits[0] = 'pear';

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

// common methods in arrays
console.log('to string', fruits.toString());
console.log(fruits.join('-'))
console.log(fruits.pop()) //pops the last item
console.log(fruits.push('berrys')) // append item toan array
console.log(fruits.shift()) // remove first element
console.log(fruits.unshift('kiwi')); // add an element at the start of tha array

let vegies = ['kales', 'tomatoes']

allGroceries = fruits.concat(vegies);

console.log(allGroceries.sort())

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray)


// objects in JavaScripts
student = {
    first: 'Juma',
    last: 'Antony',
    age: 25,
    height: 5.7,

    studentCalc: function() {
        return 'hello ' + this.first + ' ' + this.last
    }
}
console.log(student.first);
// student.first = 'NotJuma';

console.log(student.studentCalc())

// conditional, control flows(if else)
/* var age = prompt('What is your Age')

if ((age >= 18) && (age <= 35)) {
    stats = 'target demo';
    console.log(stats)
} else {
    stats = 'not target demo'
    console.log(stats)
}*/

// switch
switch (6) {
    case 0:
        text = 'weekend'
        break;
    case 5:
        text = 'weekend'
        break;
    case 6:
        text = 'weekend'
        break;
    default:
        text = 'week day'
}

console.log(text)