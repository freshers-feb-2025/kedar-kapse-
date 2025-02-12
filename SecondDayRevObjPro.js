console.log("Object And ProtoTypes....");


let person = {
    name : "Kedar",
    city : "Pune"
};

person.greet = function(){
    console.log("Heyyy....");
}
person.greet();


let person1 = {
    firstName: 'raja',
    lastName: 'sing',
    greet: function () {
        console.log('Hello, World!');
    }
};

console.log(person1);


let person = {
    firstName: 'xyz',
    lastName: 'zyx',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName());
