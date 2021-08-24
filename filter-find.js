const numbers = [5, 12, 10, 54, 85, 75, 6, 1, 5, 3, 9, 15, 51, 43, 61, 23];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(bigNumbers, smallNumbers);


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart Watch', price: 3000, color: 'black' },
    { name: 'sticky notes', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];

// filter can console an array or []
const luxeriousItem = products.filter(product => product.price > 100);
const blackItems = products.filter(product => product.color == 'black');
// console.log(luxeriousItem);
// console.log(blackItems);

//find can console first element or udefined
const pinkItems = products.find(product => product.color == 'pink');
console.log(pinkItems);