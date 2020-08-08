function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1); // Print clock1 variable (function)
console.log(clock1()); // Print what clock1() function returns
console.log(clock1());
console.log(clock1());
console.log(clock1());


const clock2 = stopWatch();
console.log(clock2); // Print clock2 variable (function)
console.log(clock2()); // Print what clock2() function returns
console.log(clock2());
console.log(clock2());

console.log(clock1());