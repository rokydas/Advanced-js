// SLICE
// copy-paste
const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5); // index 2 theke 5 er ag porjonto. 
console.log(part);
console.log(nums);

//SPLICE
// cut-paste
const removed = nums.splice(2, 5, 10, 20, 30); // index 2 theke shuru kore 5 ta elements kete felbe ar 10,20 egula ke inject kore felbe. 
// ekebare sorai felbe oigula ke. 
// nums array te oigula ar thakbe na. 
console.log(removed);
console.log(nums);

const together = nums.join(" num ");
console.log(together);