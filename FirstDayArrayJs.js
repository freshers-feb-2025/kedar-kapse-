console.log("Hello this is JS Array Practice....");

let crickters = ["Kedar","Sachin","Virat","Dhoni","Rohit"];
let model = new Array("Kriti" , "Pooja" , "Alia" , "Sai" ,"Janhvi");

console.log(crickters);
console.log(model);



let colors = ["Red", "Green", "Blue"];

console.log(colors[0]);  
console.log(colors[2]);  

colors[1] = "Yellow";    
console.log(colors);  


let animals = ["Dog", "Cat", "Elephant"];

animals.push("Tiger");   
console.log(animals);    

animals.pop();           
console.log(animals);    

animals.unshift("Lion"); 
console.log(animals);    

animals.shift();         
console.log(animals);


///Finding the Element 

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.indexOf("Mango"));  
console.log(fruits.includes("Grapes")); 


//Sorting & Reversing4

let letters = ["d", "a", "c", "b"];

letters.sort();
console.log(letters);  

letters.reverse();
console.log(letters); 


let words = ["JavaScript", "is", "awesome"];
console.log(words.join(" ")); 



