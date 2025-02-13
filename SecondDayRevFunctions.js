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
//A function stored in veriable is called Expression Function
const multiply = function(a,b){
    return a*b;
};
console.log(multiply(2,4));

//Arrow Functions
//shorter way to write the function using =>
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
//A function invoke imeditely after decleration
(function (){
    console.log("This is immediately...");
})();


//callback function
//A function take argument as another fucntion

function getmessage(callback){
    setTimeout(()=>{
        callback("Data Recived...");
    },2000);
}

getmessage((message)=>{
    console.log(message);
});

//Recursive Function
//A Function calles it self until base condition false
function increse(number){
    console.log(number);
        if(number==10){
            return;
        }
        increse(number+1);
}
increse(1);

//Clauseser Function
//

function outer(){
    let count = 0;

    return function inner(){
        count++;
        console.log(count);
    }
}

const counter =  outer();
counter();
counter();

//Anonomus function
//Function is without name 
setTimeout(function(){
    console.log("Function is Ananomus Function")
},200)


//pure function 
//A function returns always same output for the same input and has no side effect

function addi(a,b){
    return a+b;
}
console.log(add(1,3));

//impure function
//A function that modifieds the external valus for relies on external data
let count = 0;
function impureFuntion(){
    count++;
    return count;
}

console.log(impureFuntion());
console.log(impureFuntion());


//constructor Function
//A function is used to create the object

function person(name , age){

    this.name=name;
    this.age=age;
}

const person1= new person1("Kedar",23);
console.log(person1);






