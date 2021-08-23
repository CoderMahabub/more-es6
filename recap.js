// 1. let and const 
const hubby = 'Omor Sani';
let myPhone = 'iphone 15';
myPhone = 'Samsung Galaxy';

// 2. Default parameter
// 5. Spread 
function findMax(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = findMax();
console.log(biggest);

// 3. Template String
const myNotes = `I am monju. ${hubby} I don't have laili. I have a ${myPhone}`;
console.log(myNotes);

// 4. arrow function
const squars = () => 2 + 3;
console.log(squars());

const square = x => x * x;
console.log(square(9));

