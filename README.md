# learn-react

# destructuring

extract array element/object, store them in var

const numbers = [1, 2, 3, 4];
[num1, ,, num4] = numbers;
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
