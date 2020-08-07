// Double equal
let first = 2;
let second = 3;
if(first == second){
    console.log('Condition is true');
}
else{
    console.log("Condition is false");
}

// double equal can compare only same type data. 
// so that below code will print true message. 
first = 2;
second = '2';
if(first == second){
    console.log('Condition is true');
}
else{
    console.log("Condition is false");
}

// Triple equal
// triple equal also can compare variable's data type also. 
first = 2;
second = '2';
if(first === second){
    console.log('Condition is true');
}
else{
    console.log("Condition is false");
}

// js means true as 1 and false as 0
if(1 == true){
    console.log('Condition is true');
}
else{
    console.log('Condition is false');
}

if(1 == false){
    console.log('Condition is true');
}
else{
    console.log('Condition is false');
}

// but == cannot check data type. 
// so it will print true message not being the same data type. 
if(0 == false){
    console.log('Condition is true');
}
else{
    console.log('Condition is false');
}

// if we use ===, we will get false message. 
if(0 === false){
    console.log('Condition is true');
}
else{
    console.log('Condition is false');
}

// === checks both value and type. 
// == converts the value in same type and then check the value. 