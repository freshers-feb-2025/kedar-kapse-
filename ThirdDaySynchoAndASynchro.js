console.log("Synchronious &  ASynchronious");

//synchronious 
//so js programing language every statment will execute line by line
//in simple word we can say every statment will wait for previous function execution that is called synchronious

//Example code

console.log("One");
console.log("Two");
console.log("Three");

//it will execute line by line is called synchronize 

//baisc practice of set timeout function


//Asynchronious 
//in js Asynchronious is way to skip that code which will take a time for execute and it will execute next code without 
//any truble and after that it will execute that particular it will execute the that code wich is taking a time for the executin
//and dosent block the code



function hello(){
    console.log("Sey hey...");
}

setTimeout(hello,2000); //this hello function will execute after 2 second 

setTimeout(()=>{
    console.log("hey this again late...");
},2000);

//simple example call back 
//call back is nothing but it is a function wich we will pass is another function as parameter

function add(a,b){
    console.log(a+b);
}

function calculator(a,b , addcallback){
    addcallback(a,b);
}

let result = calculator(1,12 , add);


//simple example of callback 


function Server(dataId , getNextData){
    setTimeout(()=>{
        console.log("Data :- "+dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

Server(1,()=>{
    console.log("Getting Data 2");
    Server(2 , ()=>{
        console.log("Getting Data 3");
        Server(3 , ()=>{
            console.log("Getting Data 4");
            Server(4);
        })
    });
});

//call back is nothing but it is one paramid structure or we can say we are calling or writting a code inside anothor code
//so that is very hard to understand and maintain so this is called callback hell

//this is type of programing defucult to understand and manage

//example

//Server(1,()=>{
//     console.log("Getting Data 2");
//     Server(2 , ()=>{
//         console.log("Getting Data 3");                   //this is not easy to understand 
//         Server(3 , ()=>{
//             console.log("Getting Data 4");
//             Server(4);
//         })
//     });
// });


//so to removing this problam js introduced promices 


//promises
//this is a solutation of callback

//promise is a object in js that have three stages that is pending fullfil regected

