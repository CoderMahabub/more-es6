const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength);


const products = [
    {
        name: 'water bottle',
        price: 50,
        color: 'yellow'
    },
    {
        name: 'mobile phone',
        price: 15000,
        color: 'black'
    },
    {
        name: 'sticky notes',
        price: 30,
        color: 'pink'
    },
    {
        name: 'water glass',
        price: 3,
        color: 'white'
    },

];
const productNames = products.map(product => product.name);
const productsPrice = products.map(product => product.price);
const productsColor = products.map(product => product.color);
// products.map(product => console.log(product));

// products.forEach(product => console.log(product)); //forEach

console.log(productNames, productsPrice, productsColor);