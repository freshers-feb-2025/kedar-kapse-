
console.log("This is Example Of CallBack Function")

function greet(name , callBack){

    console.log(name," Greeting From The Thinkitive.....")
    callBack();
}

function sayBye(){
    console.log("Good Bye!!!! ")
}

greet("Sir",sayBye);

console.log("Call back with parameters...")

function add(a,b , callBack){
    let sum = a+b;
    callBack(sum);
}

function result(res){

    console.log("Result :- "+res);
}
add(5,10,result);



console.log("Callback setTime Out....")

console.log("Start")

setTimeout(()=>{
    console.log("Wait for 2 sec")
},2000)

console.log("End")
