const age = 4;
if(age) {
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

// kono ekta number if er vitor pass hole se jodi positive or negetive hoi, ba not null hoi, tahole condition true. 
// ar jodi number ta zero hoi, tahole condition false. 

const name = "";
if(name){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

// jodi empty string hoi, tahole false return korbe, ar jodi kisu na kisu thake tahole true return korbe. 
// " " erokom whitespace thakle seta empty string hobe na, tai seta true return korbe. 

// const address;
let address;
// const diye declare kore value set na korle error dekhabe. 
// ar let diye declare kore value set na korle error dekhabe na. but oi variable ta print korle undefined dekhabe. 
// ar ei undefined variable if er condition hisebe dile false return korbe. 
const num = null;
console.log(num);
// eivabe null variable er value null declare kore if er condition hisebe dile false return korbe. 
// eivabe NaN(Not a Number) variable er value null declare kore if er condition hisebe dile false return korbe. 
// 0 false return korbe but '0' true return korbe. 

// Falsy: 0, "", undefined, null, NaN, false
// Truthy: '0', ' ', [], true, 'false'