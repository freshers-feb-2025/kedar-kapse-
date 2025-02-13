console.log("ES6 feature");
//Es6 this means ECMA 2015 this is new feature that is introduced in in 2015 and with the help of this it made coding easier 
//and after this some new things are introsuded for the easy coding 

//after ES6 this is introduced as new feature for easier way and iteration


//Old for loop this is 
//the use of this for loop when we have need to index based iteration

for(let i = 0 ; i<=10 ; i++){
    console.log(i);
}

//for of loop 
//this is best for array and string 
//this is simple ascompair to the old way when we are working on array

let fruits=["mango","banana","chearry","kiwi"];
for(fruit of fruits){
    console.log(fruit);
}


//for in loop
//for in loops over keys in an object

let person = {
    name : "kedar",
    age : 12,
    city : "pune"
}

for(let key in person){
    console.log('${key} : ${person[key]}');
}

//for each loop
//in ES6 that is introduced for iterating the values and it provides the functional way to itrate the element 
//note we are not able to use the break and continue inside the foreach loop
let numbers = [1,2,5,3,2,5,6,7];
numbers.forEach(num => console.log(num));


//map method 
//similar to the forEach() method but it returns the new array

let nums = [1,2,3];
console.log(nums);
let square = nums.map(nums=>nums*nums);
console.log(square);


//practice 

//simple loop
for(let i = 0 ; i<=10 ; i++){
    console.log(i);
}

//for of loop
let arm = ["QA","Java","Python","Node"];
for(ar of arm){
    console.log(ar);
}

//for in loop
let perso3 = {
    name :"king kk",
    city : "pune"
}

for(let key in perso3){
    console.log('{$key} : ${perso3[key]}');
}


let an= [1,2,3,34,4,4];
an.forEach(num=>console.log(num));



