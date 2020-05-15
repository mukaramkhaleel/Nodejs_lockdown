const name = 'MRK';
const dob = 20200515;
let age = '1 Day';

function useDataofUser(name,dob,age){
    //pure function we get all the data from the passed arguments 
    return console.log(
    `name is ${name}
    date of birth is ${dob}
    the Age is ${age}`);

}
useDataofUser(name, dob, age);