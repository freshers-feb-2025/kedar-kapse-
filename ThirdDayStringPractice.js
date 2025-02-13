console.log("This is a string practice...");

//in js string is primitive data type 
//string is nothing but this is collection of characters and everything in double quots that is string 

let example ="string example";
console.log(example);
console.log("Length of string :- "+example.length);

let convert = "kedar kapse";
console.log(convert);
console.log(convert.toLocaleLowerCase());
console.log(convert.toLocaleUpperCase());

let extreact = "Kedar Kapse pune Thinkitive"
console.log(extreact);
let temp = extreact.slice(3,10);
console.log(temp);

let rep = "kedar kapse shiradhon";
let newmsg = rep.replace("shiradhon","pune");
console.log(newmsg);

let statment = "java programing language";
console.log(statment.includes("programing"));
console.log(statment.includes("gaming"));

let strs = "kedar kapse shiradhon kalamb"
let namearray = strs.split(" ");
console.log(namearray);

let remex = "   kedar  kapse     ";
console.log(remex.length);
console.log(remex.trim().length);

let repp ="js";
console.log(repp.repeat(5));

let pos= "java script is a use to handle or controller the web element";
console.log(pos.indexOf("use"));

let revs = "hello js";
let revsst = revs.split("").reverse().join("").replace(" ","");
console.log(revsst);

let words = "kedar kapse shiradhon pune thinkitive kapse"
let splword = words.split(" ");
console.log("Number of words :- "+splword.length);

let stet = "hello java";
console.log(stet.startsWith("hello"));
console.log(stet.endsWith("java"));
console.log(stet.endsWith("hello"));

let vowels = "hello java programing";
let newstrvowels = vowels.replace(/[aeiouAEIOU]/g,"");
console.log(newstrvowels);

let capeach = "kedar kapse pune maharashtra india";
console.log(capeach);

function capeachlet(str){
    return capeach.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}

console.log(capeachlet("kedar kapse shradhon"));