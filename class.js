//Class name Starts with Capital letter
class Support {
    name;
    designation = 'support web dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    };
}

const aamir = new Support('Aamir Khan', 'Dubai');
const salman = new Support('Salman Khan', 'BD');
const shahrukh = new Support('SRK', 'Bangladesh');
const akshay = new Support('Akshay', 'Bangladesh');
aamir.startSession();
salman.startSession();
console.log(aamir, salman, shahrukh, akshay);
// console.log(salman);