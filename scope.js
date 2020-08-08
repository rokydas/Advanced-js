let bonus = 20;

function sum(first, second){
    let result = first + second;
    console.log(result);
    console.log(bonus);
    if(result > 10){
        let mood = 'happy';
        console.log(mood);
    }
    // console.log(mood);
    // mood ta ke if er vitor declare kora hoise. tai ekhan theke eke access kora jabe na. 
    return result;
}

const output = sum(3,7);
// console.log(result);
// ekhane result variable er scope hosse sum function er vitore. 
// take sum function er vitor theke print kora jabe. kintu baire theke access kora jabe na. 
console.log(output);

// ekhane bonus variable ta ke globally declare kora hoise. tai bonus variable ke function er vitore baire sob jaiga theke access kora jabe. 
console.log(bonus);


// console.log(mood);
// mood ta ke sum er vitore if er vitor declare kora hoise. tai ekhan theke eke access kora jabe na. 

day = "Saturday";
console.log(day);
var day = "Friday";
console.log(day);
// bistarito word file e. 