/*
Dom Manipulations

*/
const lu = document.querySelector('.items');
// lu.remove();
// lu.firstElementChild.remove();
// lu.lastElementChild.remove();
// lu.children[1].remove();
// lu.children[1].innerHTML="<h1>Hello</h1>";
// lu.firstElementChild.textContent="Hello You";
// lu.lastElementChild.innerText='Hllo';

const bn = document.querySelector('.btn');
// bn.style.background ='red';
bn.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log("You clicked");
    // console.log(e);
    // console.log(e.target.className);
    document.querySelector('#my-form').style.background ='purple';
})


/*
Dom Selections

//Single element selector
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.btn'));

//Multiple elment selector
console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item)=>console.log(item));

*/

/*
Constructor function


function Person (firstName, lastName, age, dob){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.age = age; 
    this.dob = new Date (dob);
    this.getBirthYear  = function (){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `This name is ${this.firstName} ${this.lastName}`;
    }
}

const myfather  = new Person("Jack", "maze", 33, "2-3-2000");
const myMother  = new Person("emma", "Jean", 22, "3-4-2343");

console.log(myMother);
console.log(myfather);
console.log(myfather.dob)
console.log(myfather.getBirthYear())
console.log(myMother.getFullName())

*/

/*
function

function addnums(num1=4, num2=9){
    return num1+num2;
}

const addnums = (num1=4, num2=9) =>{
    return num1+num2;
}

const addnums = (num1=4, num2=9) => num1+num2;

const addnums = num1 => num1+7;

console.log(addnums(3));

*/

/*
Conditionals

== only compare the values. 
=== compare the values, and data types. 

let x = 22;
let y = '22';

if(x ===y){
    console.log(`${x} is identical to ${y}`);
}

x=10
const color = x>11? "blue": "red";
console.log(color);

let color='purple';

switch(color){
    case 'red':
        console.log("This is red");
        break; 
    case 'blue':
        console.log("This is blue");
        break; 
    default:
        console.log("It is neither");
        break;
}

*/


/* High order array methods

const todos = [
    {
        id:1,
        text:"Hello you",
        isCompleted: true
    },

    {
        id: 2, 
        text: "Hello World", 
        isCompleted: true
    },

    {
        id: 3, 
        text: "Hello all", 
        isCompleted:false
    }

]

todos.forEach(function(todo){console.log(todo)});

todos.forEach((todo)=>console.log(todo));

const texts = todos.map(function(todo){return todo.text})
console.log(texts);


const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted ===true
})

console.log(todoCompleted);

console.log(todoCompleted.map(function(todo){
    return todo.text;
}))

*/





/*
objects, and loops

const todos = [
    {
        id:1,
        text:"Hello you",
        isCompleted: true
    },

    {
        id: 2, 
        text: "Hello World", 
        isCompleted: true
    },

    {
        id: 3, 
        text: "Hello all", 
        isCompleted:false
    }

]

console.log(todos)

//for loop
for(let i =0; i< todos.length; i++){
    console.log(todos[i]);
}

//while loop
let i =0; 
while(i< todos.length ){

    console.log(todos[i]);
    i++;
}

// for loop fancy
for(let todo of todos){
    console.log(todo);
}
*/


/*
Object

const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies','sports'],
    address:{
        street: '50 main St',
        city: 'Boston',
        state: 'MA'
    }
}

person.email="pet@gmail.com"

console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1])
console.log(person.address.city);
console.log(person.hobbies[2]);
console.log(person)

*/

/*
Array

fruits = ['apple', 'cherry', 'blueberry', 'lemon', 'limes', 'oranges', 'grapefruit'];
fruits[7]=false;
fruits.unshift(true);
fruits.push("John");
fruits.push("A");
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf('cherry'));
*/

/*
Fun with strings

let name = "Tom"
let age = 30; 

console.log("Hello, my is "+name+", and I am "+age);
console.log(`Hello, my name is ${name}, and I am ${age}`);
let sen= `Hello, my name is ${name}, and I am ${age}`;
console.log(sen);

let brand ="What is the meaning of programming?";
let nation ="my, name, is, tom";

console.log(brand.length)
console.log(brand.toUpperCase());
console.log(brand.toLowerCase());
console.log(brand.substring(8, 11));
console.log(brand.split(' '));
console.log(nation.split(", "));

*/

/*
Data types: Numbers, Strings, boolean, null, and undefined. 

you can also get the type of something using the function: typeof

null is a object is wrong for some weird reason. 


const name="Tom";
const age = 30; 
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof age);
console.log(typeof name);
console.log(typeof isCool);
console.log(typeof y);
console.log(typeof z);
console.log(typeof x);
*/

/*
Variables: var, let, const
Don 't use var. It is globally scoped
Use let, and const. 


let x = 30;
x=40;
console.log(x)

const y=40;
y=70;
console.log(y);
*/

/*
Javascript ES6

Some useful functions:
confirm("Are you sure");
alert("Hello There");


Javascript Resources
- https://developer.mozilla.org/en-US/docs/Web/JavaScript

*/



