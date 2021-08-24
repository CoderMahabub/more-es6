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
        console.log(this.name + 'Start a support session');
    };
}

const aamir = new Support('Aamir Khan', 'India');
const salman = new Support('Salman Khan', 'BD');
console.log(salman);
console.log(aamir);