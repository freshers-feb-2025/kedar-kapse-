console.log("Hello, Kedar! Welcome to Thinkitive..");  //console log we are using for print the output that is function porvided by the java script

let name = "kedar";                                    //this is veriable , veriable will hold the value and for holding the value we need to create the type of veriable 
                                                       // so their are three type of veriable in java script 
                                                       //1) var , 2)let , 3) const
                                                       //1) var have the global scope it means we can we use the var as globally and inside the block also 
                                                       //   we will redeclere and reinitilize the var veriables
                                                       //2) let is block leval veriable we can not use the let veriable outside the block 
                                                       //   in late veriable we will reinitilize the value but we cant redeclere the late variable 
                                                       //3) const is also block leval veriable 
                                                       //   the thig is in const we can not redeclere and reinitilize the value of veriable


console.log("Examples of veriable....");
var a = "this is var veriable";                         //this value is in string
console.log(a);                                         
a = 7;                                                  //but hear we are easyly modified the value becase of var 
console.log(a);                                         //hear is the updated value 

var a = "this is redeclered veriable";                  //hear we redeclered the same veriable so this is possiable in var 
console.log(a);                                                               


let b = "this is let veriable"                          //hear we declered the let veriable 
console.log(b);                                         //hear we print that veriable
b = 9;                                                  //hear we redeclered the let veriable
console.log(b);                                         //and this is a modified value of let veriable 
//let b = "trying to redeclre the let b veriable";      //unable to redeclere the let veriable :- Note we can not redeclere the let veriable
{
    let c = "Thinkitive";                               //declere the veriable in block 
    console.log(c);                                     //and trying to print that veriable inside the block so it is working hear
}
//console.log(c);                                         //trying to print the veribale outside the block so gettting error that is undefined 

const d = "exampel of contst";                          //declered veriable as const
//d=4;                                                    //trying modify the const veriable 
//console.log(d);                                         //trying to print the modified const veribale and getting hear error that is TypeError 
//const d = 24;                                         //trying to redeclere the const veriable but not able to do that 
{
    const e="this const veriable inside the blcok"      //declered the const veriable inside the bloclk 
    console.log(e);                                     //this veriable print in a same block it is working 
}
//console.log(e);                                       //trying to call outside the block but getting error that is not declered so const we can not call outside the block 


console.log("Reserved Words");
//var let const ex... this type of words are the words is provided by the js for performing some operation and we can not use that type o words like for 
//deceleration the veriables and any other things 


