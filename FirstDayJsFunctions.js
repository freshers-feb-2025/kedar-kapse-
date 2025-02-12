function greet(){                                                                       //function is special blcok of code wich is use to perform specifix task
    console.log("Hello kedar welcome to the Thinkitive=......");                        //so this is first function and this is without parameters function 
}
greet();


function namePrint(name){                                                               //this is paramaterise function and at the calling time this want parameters 
    console.log("Software Engineer "+name+" At Thinkitive Technology");
}
namePrint("kedar");
namePrint("Ankita");


function addTwoNumbers(a , b , c){                                                      //this function created for adding the values and return the sume so when we 
    return a+b+c;                                                                       //return something then we need to call that in any veriable because this function 
}                                                                                       //this function is returning something so we need to call it in any veriablkle
let result = addTwoNumbers(7,45,18);
console.log("sum :- ",result);

