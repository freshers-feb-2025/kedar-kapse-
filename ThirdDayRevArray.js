console.log("Array Practice...");

//Two ways to write the Array in js
//Array is nothing but it is collections of data , and this is a object


let ar = [1,2,3,4,5,6,7,8,9,0];
console.log(ar);

let arr = new Array("kedar","kapse","java");
console.log(arr);

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); 

fruits.push("Orange");
fruits.shift();
console.log(fruits);

//let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Banana")); 

let letters = ["A", "B", "C", "D"];
console.log(letters.reverse()); 

let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let merged = arr1.concat(arr2);
console.log(merged); 


//to find the index of mango 
//let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Mango"));

//remove the duplicate from the array
let a=[1,2,3,2,2,3,5,6,7,8,98,9];
let uniquearray = [...new Set(a)];
console.log(uniquearray);

//sort array numnber in accending order
let numbers = [1,4,3,26,9,27,9];
console.log(numbers.sort((a,b)=> a-b));

//find the max number in array
let numex = [4,32,12,1,9,7,6];
console.log(Math.max(...numex));


//map method 
let num1 = [1,2,3,4,5,6];
let square = num1.map(num=>num*num);
console.log(square);

//filer method 
let num2=[1,2,3,4,5,6,7];
let evennumber = num2.filter(num=>num%2==0);
console.log(evennumber);


//find method 
let num3= [1,2,3,4,5,6,7,8,9];
let findmatch = num3.find(num=>num>3);
console.log(findmatch);

//every method it will chake all the values
let num4 =[1,2,3,4,8,6];
let num4res = num4.every(num=>num>0);
console.log(num4res);

//sort mehtod 
let num5 = [7,2,4,3,4,7,8];
console.log(num5);
num5.sort((a,b)=>a-b);
console.log(num5);


//sort method for decending order
let num6 = [2,3,4,5,6,6,7,8];
console.log(num6);
num6.sort((a,b)=>b-a);
console.log(num6);


//for each method for print or iterate the loop4
let num7 = [1,3,2,4,6,5,7,9,8];
console.log(num7);
num7.forEach(num => console.log(num));


//concate is use to concate tow or more array in one array 

let arr11 = ["A", "B"];
let arr21 = ["C", "D"];
let merged1 = arr1.concat(arr2);
console.log(merged1); 

//include method will use to check the that particular number or object is present or not 

let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1.includes("Mango")); 


