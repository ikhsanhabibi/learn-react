# [learn-react]

# [SECTION 1]

# course outline

getting started
basics
debugging
styling
components
deeper
HTTP request (connect server, AJAX)
routing (domain name)
forms & validation
redux
authentication
testing
deployement (send to server)
bonus (animation, webpack)

# what to do

code along
check source code
go to stackoverflow
practice

# what is react?

javascript library for building user interface, running on browser, not in server
there is component, we can reuse
dynamic, maintainable

why react?

- UI states becomes difficult to handle vanila JS
- focus on bussines logic, not preventing your app from exploding
- huge community, ecosystem

react alternatives?

- angular, vue, jquery

two kind of applications?

- single page : one single HTML page, build all components, one ReactDOM call (popular)
- multi page :multiple HTML pages, build some components, ReactDOM call per widget/component

# CodePen

editor HTML, CSS, JS

# [SECTION 2]

# Next Gen JS

clean, robust syntax

# jsbin.com

editor online

# let, const, var

var = use let and const
const = constant value, not changed
let = variables value (the new var, really variable)

# arrow functions

function myFunc(){} //normal
const myFunc = (parameters) = {}

# export & import

export default name (const)
export const myFunc = () => {}
export const value = 10

import name/nama from './name.js'
import {myFunc} from './other.js'
import {value as Werte} from './other.js'

# classes

to create component
has property
usage (constructor, function)
inheritance

super() in constructor child, if using this
dont use super(), if using this (ES7)

# properties & methods

prop: var, attribute
method: function

# spread & rest operators (...)

spread: split/merged an array elements/object props

example:
const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers); //[1, 2, 3, 4]

example:
const person = {
name:'Max'
};

const newPerson = {
...person, age:28
}

console.log(newPerson); // [object Object] {age: 28, name: "Max"}

rest: merge a list of function arguments into an array (used less often)

example: (args whatever names)
const filter = (...args) => {
return args.filter(el => el === 1);
}

console.log(filter(1,2,3,4))

# destructuring

extract array element/object, store them in var

array example:
[a,b] = ['Hello','Habibi']
consol.log(a) //Hello
consol.log(b) //Habibi

object example:
{name} = {name:'Habibi', age:'23'}
consol.log(name) //Habibi
consol.log(age) //undefined

const numbers = [1, 2, 3, 4];
[num1,_,_,num4] = numbers;
console.log(num1,num4) // 1,4

# copy object in place, copy immutable way, called spread

example
const person = {
name: 'Ikhsan'
};

const secondPerson= {
...person
};

person.name = 'Habibi'

console.log(secondPerson)
// [object Object] {name: "Ikhsan"}

# array functions

example
const numbers = [1,2,3];
const doubleNumArray = numbers.map((num) => {
return num\*2 ;
});

console.log(numbers);
console.log(doubleNumArray);

//[1, 2, 3][2, 4, 6]

# [SECTION 3]

workflow

- single page app / multiple age app
- dependency management

why?

- optimize code
- use next gen js features ES6 (less erros, best practices, less time)
- more productive

how to do?

- dependency management tool (react, reactDOM), npm (nodes package manager) or yarn
- bundler (one file), e.g. webpack
- compiler e.g. babel
- development server

# tools

node.js (use as package manager)

# steps

sudo npm install create-react-app -g
create-react-app app-name

# JSX

class : className

# Component

reusable
configureable
