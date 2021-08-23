// Destructuring

const fish = {
    id: 58,
    name: 'King Hilsha',
    price: 9000,
    phone: '01555555555',
    address: 'Chandpur',
    dress: 'Silver'
};
/* const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id; */

const { address, phone, price, dress, id } = fish;

console.log(phone, price);
console.log(phone);
console.log(phone, dress);
console.log(phone, id);
console.log(address, phone);


// Destructuring is usefull for complex object
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Ajmol', food: 'Fuska' },
    web: {
        work: 'Website Development',
        employee: 20,
        framwork: 'rect',
        office: {
            location: 'dhaka',
            telephone: '01555555',
            color: 'yellow'
        }
    }
};

// const work = company.web.work;
// const framwork = company.web.framwork;

const { name, food } = company.ceo;
const { employee } = company.web;
const { telephone, location } = company.web.office;
console.log(phone, location, name, food, employee);