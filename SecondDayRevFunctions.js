console.log("Function Example..");


//Example Of Simple Function
function sayHello(){
    console.log("Hey Hello....");
}

//Example Of Parametes Function
function add(a,b){
    return a+b;
}
let result = add(19,3);
console.log(result);

//Example Of Function Expression
const multiply = function(a,b){
    return a*b;
};
console.log(multiply(2,4));

//Arrow Functions
const substract = (a,b)=> a-b;
console.log(substract(10,4));

//Higher Order Functions
//A HigerOrder Function it will take a another function as argument and returns a function 

function newgreet(name , callback){
    console.log("Hello , "+name);
    callback();
}

function saybye(){
    console.log("Good bye!!!!");
}

newgreet("Raam",saybye);

//Immediately Invoked Function Expressions (IIFE)
//or anonymous function
(function (){
    console.log("This is immediately...");
})();

