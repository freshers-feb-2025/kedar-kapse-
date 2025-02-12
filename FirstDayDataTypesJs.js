console.log("This is Data Types in Js");

console.log("Primitive Data Types");
let age = 23;                                   //Numbers
let weight = 70.30                              //Number (Desimal)
let name  = "Kedar"                             //String
let isStudent = true                            //Boolean
let city                                        //Undefined
let emptyValue = null                           //null
let bigNumber  = 1234567890234n                 //BigInt
let uniqueId = Symbol("id")                     //Symbol


console.log(age);
console.log(weight);
console.log(name);
console.log(isStudent);
console.log(city);
console.log(emptyValue);
console.log(bigNumber);
console.log(uniqueId);


console.log("Nun Primitive Data Types");

let person = {
    name : "Kedar",
    age : 23,
    city : "Pune"
};

let numbers = [1,2,3,4,5,6,7];

function greet(){
    console.log("Good Afternoon Guyes...");
}

console.log(typeof person);
console.log(typeof numbers);
console.log(typeof greet);


//Numbers Methods
//so the number methods we are using for the convert the any value in numbers like some time numbers are in string then we need to convert in to the numbers thats why we want number method 
//hear is the some example of number methods

console.log(Number("7"));
console.log(Number("87.320"));
console.log(Number("Hello"));
console.log(Number(true));
console.log(Number(false));


