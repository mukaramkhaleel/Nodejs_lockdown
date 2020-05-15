//anonymous function is used for calling a function without giving it a name this is the stepping stone to an Arrow function 
const name = 'MRK';
const dob = 20200515;
let age = '1 Day';

const user = function (name,dob,age){
    return (
    `name is ${name}
    date of birth is ${dob}
    the Age is ${age}`);

};

console.log(user(name, dob, age));