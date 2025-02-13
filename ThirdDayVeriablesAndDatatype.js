console.log("Veriables in js");
console.log("Variables are used to store data. In JavaScript, you can declare variables using three keywords:");

//there are three type to declere the veriable in js
//old way function scoped 
//let modern way block scoped
//const can not be redeclere and reinitilize 


//let 

let name = "Kedar"
let age = 23;
let isStudent = true;

console.log(name+" "+age+" "+isStudent);

let num = 100;
let text = "JavaScript";
let isFun = true;
let value = null;
let notDefined;

console.log(typeof num);   
console.log(typeof text);  
console.log(typeof isFun); 
console.log(typeof value); 
console.log(typeof notDefined);

let language = "java";
let str2 = language.replaceAll("java script");
console.log(str2);

const person = {
    name : "kedar",
    city : "pune"
}
console.log(person);

let fruits = ["kedar","kapse","pune"]
console.log(fruits);


//var -> var have the global scope so and function scope 
//if we create a var inside the function then we can not access outside the function

//examples

function test (){
    var fullname = "kedar";
}

//console.log(fullname) // if we try to call name outside the function then it will show the error 

{
   var fullname = "kedar kapse"
}
console.log(fullname);

//data types in js 
//primitive data types
//1 number                          number                  let a = 7
//2 string                          String                  let name = "kedar"
//3 boolean                         boolean                 let isstudent = true
//4 undefined                       undifined               let x 
//5 BigInt                          bigint                  let num = 12345n
//6 null                            null                    let value = null
//7 symbols                         symbols                 let sym = 


//nun primitive data type 

let person1 = {

    fullname : "kedar kapse",
    city : "pune",
}

console.log(person1.fullname+" "+person1.city);

let fruits1 = ["mango","apple","greps"]

console.log(fruits1);

let mix = ["kedar",23,true];
console.log(mix);

