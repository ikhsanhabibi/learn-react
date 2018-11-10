# learn-react

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
