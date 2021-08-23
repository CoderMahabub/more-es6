// Recap Destructing: declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 60, a: 25, b: 68 };
const { a, b, x, z } = myObject;
console.log(a, b, x, z);

// Destructing array
const [p, q] = [34, 37, 64, 66];
// console.log(p, q);

const [best, faltu] = [45, 'Faltu Maiya'];
console.log(best, faltu);

const { sky, color, money } = { sky: 'blue', soil: 'mati', color: 'red', money: 500 }
// console.log(sky, color, money);

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
console.log(company.web.name?.something);//Chaining