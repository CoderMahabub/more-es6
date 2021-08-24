//Class name Starts with Capital letter
class TeamMember {
    name;
    designation = 'support web dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTIme;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTIme = time;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    };
}
class StudentCare {
    name;
    designation = 'student care';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'Build a routing for ', student)
    }
}

class NeptuneDev {
    name;
    designation = 'student care web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(version) {
        console.log(this.name, 'release appp version ', version)
    }
}
const aamir = new Support('Aamir Khan', 'Dubai', 11);
const salman = new Support('Salman Khan', 'BD', 4);
const shahrukh = new Support('SRK', 'Bangladesh', 11);
const akshay = new Support('Akshay', 'Bangladesh', 4);

const alia = new StudentCare('Alia Bhaat', 'Mumbai');
console.log(alia);
