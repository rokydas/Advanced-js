const students = [
    {id: 21, name: 'Roky Das'},
    {id: 22, name: 'Riya Das'},
    {id: 43, name: 'Mintu Das'},
    {id: 44, name: 'Zinu Das'}
];

// Finding the all names of the objects in the students array. 
// bangla method
const names = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    names.push(element.name);
}
console.log(names);

// map method
const names2 = students.map(function(element){
    return element.name;
})

console.log(names2);

// map and arrow function
const names3 = students.map(element => element.name);
console.log(names3);

// filter to find out whose id greater than 40 
const greater = students.filter(element => element.id > 40);
console.log(greater);

// if we use find instead of filter, we will get only one object. 
const greater1 = students.find(element => element.id > 40);
console.log(greater1);