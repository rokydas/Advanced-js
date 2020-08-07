// UNDEFINED

let number;
console.log(number);

// if we don't set a value to a variable, then it will be undefined. 

function add(num1, num2){
    console.log(num1 + num2);
    return;
}

let result = add(5, 7); 
console.log(result);

// Our function is not returning anything. That's why result is undefined. 

function print(num1, num2){
    console.log(num1, num2);
}
print(10);
// Here, we didn't pass any value for num2. So, it will print undefined. 
// If we set default value for num2, then we will not found undefined. 

const person = {name: 'Roky Das', ID: 18701035, phone: '01521227862'};
console.log(person.phone);
console.log(person.address);

// Here, we didn't set person object's address. That why it printed undefined. 

let fun = undefined;
console.log(fun);
// It's not fare to define an undefined value to a variable. 

//NULL = empty or there is nothing

// We can found undefined in many ways. When we access a variable which is accidently not defined. 
// that is undefined.
// but when we set a empty value to a variable. that's called null. 
 