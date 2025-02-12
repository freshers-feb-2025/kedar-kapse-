console.log("Controll Flow..")
console.log("Conditional Statements (Decision Making).");

let age = 20;
//simple if condition if the condition is true then it will print You are an adult
if (age >= 18) {
    console.log("You are an adult.");
}



//this is is the if elase statment if the if condion is true then it will execute if block or elase if the if conditioin is flase then it will execute the elase block 
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside.");
} else {
    console.log("The weather is fine.");
}


//this is else if condition so in their we will create the multipal if condition 

let name ="kedar"
if(name=="ram"){
    console.log("Hey I am Ram")
}else if(name=="kedar"){
    console.log("kedar")
}else{
    console.log("Not Kedar , Not Raam");
}


//this is switch statment and hear it will check the condition with the case if the condition is match then it will print that particular block 

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the workweek!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Sunday":
        console.log("Enjoy your holiday!");
        break;
    default:
        console.log("It's a regular day.");
}


//this is a for loop hear we will do initilization condition and increment and decrement for printing the number values and anything this is called looping statment 

for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}


//this is also work like a for

let num = 1;
while (num <= 3) {
    console.log("Number:", num);
    num++;
}


//this is do while statment and that is different from the while loop what it will doing that is it will print first and after that it will check that value conditon 

let count = 5;
do {
    console.log("Count:", count);
    count++;
} while (count <= 7);



try {
    let result = 10 / 0;
    console.log("Result:", result); 
    let num = undefinedVar; 
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This runs no matter what.");
}




