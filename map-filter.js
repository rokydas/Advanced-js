// Making a square array using bangla process. 
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

// Map is applied on an array, where we can access the elements, return something. 

console.log(output);

// Making a square array using map
const result = numbers.map(function(element, index, array){
    // console.log(element * element);
    // console.log(element, index, array);
    return element * element;
})

console.log(result);

// Arrow function and map together 
const result2 = numbers.map(x => x * x);
console.log(result2);

let bigger = numbers.filter(x => x > 5);
console.log(bigger);

// find 
bigger = numbers.find(x => x > 5);
console.log(bigger);

// find just return 1 value. but filter return the all values and 
// make an array using the values that fulfills the condition. 

// modem