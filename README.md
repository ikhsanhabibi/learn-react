# learn-react

<<<<<<< HEAD
#destructuring

extract array element/object, store them in var

const numbers = [1, 2, 3, 4];
[num1, ,, num4] = numbers;
console.log(num1,num4) // 1,4

#copy object in place, copy immutable way, called spread

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

#array functions

example
const numbers = [1,2,3];
const doubleNumArray = numbers.map((num) => {
return num\*2 ;
});

console.log(numbers);
console.log(doubleNumArray);

//[1, 2, 3][2, 4, 6]

# CHAPTER 3

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

#tools
node.js (use as package manager)

#steps
sudo npm install create-react-app -g
create-react-app app-name

#JSX
class : className

#Component
reusable
configureable

=======
>>>>>>> master
# SECTION 2

# class, prop & methods

prop: var
method: function

# spread & rest operators (...)

spread: split/merged an array elements/object

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

rest: merge a list of function arguments into an array

example:
const filter = (...args) => {
return args.filter(el => el === 1);
}

console.log(filter(1,2,3,4))
