console.log("Synchronous Vs. Asynchronous");


console.log("Start")
function syncTask(){
    console.log("Executing Task.....");
}

syncTask();
console.log("End");

console.log("Asynchronous Execution (setTimeout)")

console.log("Start");
setTimeout(()=>{
    console.log("Executing after 2 seconds...");
},2000);


console.log("End...");


console.log("Example: Callback Function")

console.log("Start..")

function fetchData(Callback) {

    setTimeout(()=>{
        console.log("Data received!");
        callback();
    },20000)
}

fetchData(() => {
    console.log("Processing data...");
});

console.log("End");





